const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Configuration
const LANG_DIR = path.join(__dirname, '../public/lang');
const TIMEOUT = 10000; // 10 seconds timeout
const MAX_RETRIES = 2;
const RETRY_DELAY = 2000; // 2 seconds between retries

// ANSI color codes for better output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

// Statistics
const stats = {
  totalLinks: 0,
  validLinks: 0,
  invalidLinks: 0,
  timeoutLinks: 0,
  files: 0
};

// Store results for final report
const results = {
  valid: [],
  invalid: [],
  timeout: [],
  error: []
};

/**
 * Make HTTP/HTTPS request with timeout and retries
 */
function checkUrl(url, retries = 0) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const protocol = urlObj.protocol === 'https:' ? https : http;
    
    const options = {
      method: 'HEAD',
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname + urlObj.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      timeout: TIMEOUT
    };

    const req = protocol.request(options, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        
        // Handle relative redirects
        if (redirectUrl.startsWith('/')) {
          redirectUrl = `${urlObj.protocol}//${urlObj.hostname}${redirectUrl}`;
        } else if (!redirectUrl.startsWith('http')) {
          redirectUrl = `${urlObj.protocol}//${urlObj.hostname}/${redirectUrl}`;
        }
        
        resolve(checkUrl(redirectUrl, retries));
        return;
      }
      
      resolve({
        url,
        status: res.statusCode,
        success: res.statusCode >= 200 && res.statusCode < 300
      });
    });

    req.on('timeout', () => {
      req.destroy();
      if (retries < MAX_RETRIES) {
        setTimeout(() => {
          resolve(checkUrl(url, retries + 1));
        }, RETRY_DELAY);
      } else {
        resolve({
          url,
          status: 'TIMEOUT',
          success: false,
          error: 'Request timeout'
        });
      }
    });

    req.on('error', (error) => {
      if (retries < MAX_RETRIES) {
        setTimeout(() => {
          resolve(checkUrl(url, retries + 1));
        }, RETRY_DELAY);
      } else {
        resolve({
          url,
          status: 'ERROR',
          success: false,
          error: error.message
        });
      }
    });

    req.end();
  });
}

/**
 * Extract URLs from JSON object recursively
 */
function extractUrls(obj, urls = []) {
  if (typeof obj === 'string') {
    // Check if string is a URL
    const urlRegex = /https?:\/\/[^\s"]+/g;
    const matches = obj.match(urlRegex);
    if (matches) {
      urls.push(...matches);
    }
  } else if (Array.isArray(obj)) {
    obj.forEach(item => extractUrls(item, urls));
  } else if (typeof obj === 'object' && obj !== null) {
    // Check for 'url' key specifically
    if (obj.url && typeof obj.url === 'string') {
      urls.push(obj.url);
    }
    // Recursively check all values
    Object.values(obj).forEach(value => extractUrls(value, urls));
  }
  return urls;
}

/**
 * Load and parse JSON file
 */
function loadJsonFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`${colors.red}✗${colors.reset} Error reading ${path.basename(filePath)}: ${error.message}`);
    return null;
  }
}

/**
 * Validate links in a single file
 */
async function validateFileLinks(filePath) {
  const fileName = path.basename(filePath);
  console.log(`\n${colors.cyan}Processing:${colors.reset} ${fileName}`);
  
  const data = loadJsonFile(filePath);
  if (!data) return;

  const urls = extractUrls(data);
  const uniqueUrls = [...new Set(urls)]; // Remove duplicates
  
  if (uniqueUrls.length === 0) {
    console.log(`  ${colors.yellow}No URLs found${colors.reset}`);
    return;
  }

  console.log(`  Found ${uniqueUrls.length} unique URL(s)`);
  stats.totalLinks += uniqueUrls.length;
  stats.files++;

  // Check each URL
  for (let i = 0; i < uniqueUrls.length; i++) {
    const url = uniqueUrls[i];
    process.stdout.write(`  [${i + 1}/${uniqueUrls.length}] Checking ${url.substring(0, 60)}... `);
    
    try {
      const result = await checkUrl(url);
      
      if (result.success) {
        console.log(`${colors.green}✓ ${result.status}${colors.reset}`);
        stats.validLinks++;
        results.valid.push({ file: fileName, url, status: result.status });
      } else if (result.status === 'TIMEOUT') {
        console.log(`${colors.yellow}⏱ TIMEOUT${colors.reset}`);
        stats.timeoutLinks++;
        results.timeout.push({ file: fileName, url, error: result.error });
      } else {
        console.log(`${colors.red}✗ ${result.status || 'ERROR'}${colors.reset}`);
        stats.invalidLinks++;
        
        if (result.error) {
          results.error.push({ file: fileName, url, error: result.error });
        } else {
          results.invalid.push({ file: fileName, url, status: result.status });
        }
      }
    } catch (error) {
      console.log(`${colors.red}✗ ${error.message}${colors.reset}`);
      stats.invalidLinks++;
      results.error.push({ file: fileName, url, error: error.message });
    }
    
    // Small delay between requests to be respectful
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}

/**
 * Print final report
 */
function printReport() {
  console.log(`\n${colors.bright}${'='.repeat(80)}${colors.reset}`);
  console.log(`${colors.bright}VALIDATION SUMMARY${colors.reset}`);
  console.log(`${'='.repeat(80)}`);
  
  console.log(`\n${colors.cyan}Statistics:${colors.reset}`);
  console.log(`  Files processed: ${stats.files}`);
  console.log(`  Total links: ${stats.totalLinks}`);
  console.log(`  ${colors.green}Valid (200-299):${colors.reset} ${stats.validLinks} (${((stats.validLinks / stats.totalLinks) * 100).toFixed(1)}%)`);
  console.log(`  ${colors.red}Invalid:${colors.reset} ${stats.invalidLinks} (${((stats.invalidLinks / stats.totalLinks) * 100).toFixed(1)}%)`);
  console.log(`  ${colors.yellow}Timeout:${colors.reset} ${stats.timeoutLinks} (${((stats.timeoutLinks / stats.totalLinks) * 100).toFixed(1)}%)`);

  // Show invalid links
  if (results.invalid.length > 0) {
    console.log(`\n${colors.red}${colors.bright}INVALID LINKS (Non-200 Status):${colors.reset}`);
    results.invalid.forEach(({ file, url, status }) => {
      console.log(`  ${colors.red}✗${colors.reset} [${file}] ${url}`);
      console.log(`    Status: ${status}`);
    });
  }

  // Show error links
  if (results.error.length > 0) {
    console.log(`\n${colors.red}${colors.bright}ERROR LINKS (Connection/DNS Issues):${colors.reset}`);
    results.error.forEach(({ file, url, error }) => {
      console.log(`  ${colors.red}✗${colors.reset} [${file}] ${url}`);
      console.log(`    Error: ${error}`);
    });
  }

  // Show timeout links
  if (results.timeout.length > 0) {
    console.log(`\n${colors.yellow}${colors.bright}TIMEOUT LINKS (May need retry):${colors.reset}`);
    results.timeout.forEach(({ file, url, error }) => {
      console.log(`  ${colors.yellow}⏱${colors.reset} [${file}] ${url}`);
      console.log(`    ${error}`);
    });
  }

  // Success message or error exit
  console.log(`\n${colors.bright}${'='.repeat(80)}${colors.reset}`);
  
  if (stats.invalidLinks === 0 && stats.timeoutLinks === 0) {
    console.log(`${colors.green}${colors.bright}✓ All links are valid!${colors.reset}\n`);
    process.exit(0);
  } else {
    console.log(`${colors.red}${colors.bright}✗ Found ${stats.invalidLinks + stats.timeoutLinks} problematic link(s)${colors.reset}\n`);
    process.exit(1);
  }
}

/**
 * Main execution
 */
async function main() {
  console.log(`${colors.bright}External Link Validator${colors.reset}`);
  console.log(`${colors.cyan}Validating external links in translation files...${colors.reset}`);
  console.log(`Directory: ${LANG_DIR}\n`);

  // Get all JSON files
  const files = fs.readdirSync(LANG_DIR)
    .filter(file => file.endsWith('.json'))
    .map(file => path.join(LANG_DIR, file));

  if (files.length === 0) {
    console.log(`${colors.yellow}No JSON files found in ${LANG_DIR}${colors.reset}`);
    process.exit(0);
  }

  console.log(`Found ${files.length} JSON file(s) to scan`);

  // Check if specific file argument is provided
  const specificFile = process.argv[2];
  let filesToCheck = files;
  
  if (specificFile) {
    // Check specific file only - try multiple path formats
    let fullPath;
    
    if (fs.existsSync(specificFile)) {
      fullPath = specificFile;
    } else if (fs.existsSync(path.join(LANG_DIR, specificFile))) {
      fullPath = path.join(LANG_DIR, specificFile);
    } else if (fs.existsSync(path.join(process.cwd(), specificFile))) {
      fullPath = path.join(process.cwd(), specificFile);
    } else {
      console.error(`${colors.red}Error: File not found: ${specificFile}${colors.reset}`);
      console.error(`Tried paths:`);
      console.error(`  - ${specificFile}`);
      console.error(`  - ${path.join(LANG_DIR, specificFile)}`);
      console.error(`  - ${path.join(process.cwd(), specificFile)}`);
      process.exit(1);
    }
    
    filesToCheck = [fullPath];
    console.log(`${colors.cyan}Validating single file: ${path.basename(fullPath)}${colors.reset}`);
  }

  // Process each file
  for (const file of filesToCheck) {
    await validateFileLinks(file);
  }

  // Print final report
  printReport();
}

// Run the validator
main().catch(error => {
  console.error(`${colors.red}Fatal error:${colors.reset}`, error);
  process.exit(1);
});
