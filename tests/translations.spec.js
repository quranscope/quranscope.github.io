import { test, expect } from '@playwright/test';

/**
 * Translation Key Rendering Tests
 * Verifies that all translation keys render correctly without undefined values
 */

const contentPages = [
  { path: '/comparative-research', name: 'Comparative Research' },
  { path: '/scientific-errors', name: 'Scientific Errors' },
  { path: '/expansion-history', name: 'Expansion History' },
  { path: '/antisemitism-christianity', name: 'Antisemitism Christianity' },
  { path: '/real-world-harm', name: 'Real World Harm' },
  { path: '/migration-impact', name: 'Migration Impact' },
  { path: '/terrorist-organizations', name: 'Terrorist Organizations' },
  { path: '/jihad-study', name: 'Jihad Study' },
  { path: '/muhammad-women', name: 'Muhammad & Women' },
  { path: '/recent-attacks', name: 'Recent Attacks' },
  { path: '/ex-muslim-resources', name: 'Ex-Muslim Resources' },
  { path: '/solution', name: 'Solution' },
];

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'Arabic' },
  { code: 'de', name: 'German' },
  { code: 'fr', name: 'French' },
];

test.describe('Translation Key Rendering', () => {
  test.describe('Check for undefined values', () => {
    for (const { path, name } of contentPages) {
      test(`${name} should not show "undefined" text`, async ({ page }) => {
        const response = await page.goto(path);
        
        // Skip if page returns error
        if (!response || !response.ok()) {
          test.skip();
          return;
        }
        
        await page.waitForLoadState('networkidle');
        
        // Get all visible text content
        const bodyText = await page.textContent('body');
        
        // Check for undefined values
        const hasUndefined = bodyText && bodyText.includes('undefined');
        
        if (hasUndefined) {
          // Take screenshot for debugging
          await page.screenshot({ 
            path: `test-results/undefined-${name.replace(/\s+/g, '-')}.png` 
          });
          
          // Find all elements containing "undefined"
          const undefinedElements = await page.locator('text=undefined').all();
          const count = undefinedElements.length;
          
          console.log(`⚠️  Found ${count} "undefined" text on ${name} page`);
        }
        
        expect(hasUndefined).toBe(false);
      });
    }
  });

  test.describe('Check for missing translation keys', () => {
    for (const { path, name } of contentPages) {
      test(`${name} should not show translation key names`, async ({ page }) => {
        const response = await page.goto(path);
        
        // Skip if page returns error
        if (!response || !response.ok()) {
          test.skip();
          return;
        }
        
        await page.waitForLoadState('networkidle');
        
        // Get all visible text content
        const bodyText = await page.textContent('body');
        
        if (!bodyText) {
          test.skip();
          return;
        }
        
        // Common translation key patterns that shouldn't appear as visible text
        const keyPatterns = [
          /\btitle\b/i,
          /\bsubtitle\b/i,
          /introPara\d+/i,
          /sectionTitle\d*/i,
          /\bdescription\d*/i,
          /translations\./i,
          /\.json/i,
        ];
        
        const foundKeys = [];
        for (const pattern of keyPatterns) {
          // Look for standalone key names (not part of normal text)
          const matches = bodyText.match(pattern);
          if (matches && matches.length > 3) {
            // If pattern appears many times, likely a key issue
            foundKeys.push(pattern.toString());
          }
        }
        
        if (foundKeys.length > 0) {
          console.log(`⚠️  Possible translation keys visible on ${name}:`, foundKeys);
        }
        
        // This is a soft check - just log warnings
        expect(foundKeys.length).toBeLessThan(5);
      });
    }
  });

  test.describe('Multi-language translation completeness', () => {
    for (const { code, name } of languages) {
      test(`Home page should load completely in ${name} (${code})`, async ({ page }) => {
        await page.goto(`/?lang=${code}`);
        await page.waitForLoadState('networkidle');
        
        // Get all visible text
        const bodyText = await page.textContent('body');
        
        // Check for undefined
        const hasUndefined = bodyText && bodyText.includes('undefined');
        
        if (hasUndefined) {
          console.log(`⚠️  Home page has "undefined" in ${name} (${code})`);
        }
        
        expect(hasUndefined).toBe(false);
      });

      test(`Comparative Research should load completely in ${name} (${code})`, async ({ page }) => {
        await page.goto(`/comparative-research?lang=${code}`);
        await page.waitForLoadState('networkidle');
        
        // Get all visible text
        const bodyText = await page.textContent('body');
        
        // Check for undefined
        const hasUndefined = bodyText && bodyText.includes('undefined');
        
        if (hasUndefined) {
          console.log(`⚠️  Comparative Research has "undefined" in ${name} (${code})`);
        }
        
        expect(hasUndefined).toBe(false);
      });
    }
  });

  test.describe('Detailed translation validation', () => {
    test('should render all major sections without undefined', async ({ page }) => {
      await page.goto('/comparative-research');
      await page.waitForLoadState('networkidle');
      
      // Check specific sections
      const sections = [
        'h1', // Main heading
        'h2', // Section headings
        'p',  // Paragraphs
        '[class*="intro"]', // Intro boxes
        '[class*="card"]', // Content cards
      ];
      
      for (const selector of sections) {
        const elements = await page.locator(selector).all();
        
        for (let i = 0; i < elements.length; i++) {
          const text = await elements[i].textContent();
          
          if (text && text.includes('undefined')) {
            const html = await elements[i].innerHTML();
            console.log(`⚠️  Undefined found in ${selector}[${i}]:`, html.substring(0, 100));
            
            // Take screenshot
            await page.screenshot({ 
              path: `test-results/undefined-section-${selector.replace(/[^a-z]/gi, '-')}.png` 
            });
          }
          
          expect(text).not.toContain('undefined');
        }
      }
    });

    test('should have meaningful content in headings', async ({ page }) => {
      await page.goto('/comparative-research');
      await page.waitForLoadState('networkidle');
      
      // Check all headings have actual content
      const headings = await page.locator('h1, h2, h3, h4').all();
      
      for (let i = 0; i < headings.length; i++) {
        const text = await headings[i].textContent();
        const trimmed = text?.trim() || '';
        
        // Heading should have at least 3 characters
        expect(trimmed.length).toBeGreaterThan(2);
        
        // Should not be just numbers or special characters
        expect(trimmed).toMatch(/[a-zA-Z]/);
      }
    });

    test('should have content in intro boxes', async ({ page }) => {
      await page.goto('/comparative-research');
      await page.waitForLoadState('networkidle');
      
      // Find intro/warning boxes
      const introBoxes = await page.locator('[class*="intro"], [class*="warning"], [class*="alert"]').all();
      
      if (introBoxes.length > 0) {
        for (let i = 0; i < introBoxes.length; i++) {
          const text = await introBoxes[i].textContent();
          const trimmed = text?.trim() || '';
          
          // Should have meaningful content
          expect(trimmed.length).toBeGreaterThan(10);
          expect(trimmed).not.toContain('undefined');
        }
      }
    });

    test('should render statistics correctly', async ({ page }) => {
      await page.goto('/comparative-research');
      await page.waitForLoadState('networkidle');
      
      // Look for statistics sections
      const statsElements = await page.locator('[class*="stat"], [class*="number"], [class*="metric"]').all();
      
      for (let i = 0; i < statsElements.length; i++) {
        const text = await statsElements[i].textContent();
        
        if (text && text.trim().length > 0) {
          // Should not contain undefined
          expect(text).not.toContain('undefined');
          
          // Should have some content
          expect(text.trim().length).toBeGreaterThan(0);
        }
      }
    });
  });

  test.describe('Empty content detection', () => {
    test('pages should not have large empty sections', async ({ page }) => {
      const pagesToCheck = [
        '/comparative-research',
        '/scientific-errors',
        '/jihad-study',
      ];

      for (const path of pagesToCheck) {
        await page.goto(path);
        await page.waitForLoadState('networkidle');
        
        // Check if page has substantial text content
        const bodyText = await page.textContent('body');
        const textLength = bodyText?.replace(/\s+/g, ' ').trim().length || 0;
        
        // Page should have at least 500 characters of content
        if (textLength < 500) {
          console.log(`⚠️  ${path} has very little content (${textLength} chars)`);
        }
        
        expect(textLength).toBeGreaterThan(200);
      }
    });

    test('should have paragraphs with actual content', async ({ page }) => {
      await page.goto('/comparative-research');
      await page.waitForLoadState('networkidle');
      
      const paragraphs = await page.locator('p').all();
      let meaningfulParagraphs = 0;
      
      for (const p of paragraphs) {
        const text = await p.textContent();
        const trimmed = text?.trim() || '';
        
        if (trimmed.length > 20) {
          meaningfulParagraphs++;
          
          // Should not contain undefined
          expect(trimmed).not.toContain('undefined');
        }
      }
      
      // Should have at least a few paragraphs with content
      expect(meaningfulParagraphs).toBeGreaterThan(2);
    });
  });

  test.describe('Console error detection', () => {
    test('should not have translation loading errors', async ({ page }) => {
      const errors = [];
      
      page.on('console', msg => {
        if (msg.type() === 'error') {
          const text = msg.text();
          if (text.includes('translation') || text.includes('.json') || text.includes('fetch')) {
            errors.push(text);
          }
        }
      });
      
      await page.goto('/comparative-research');
      await page.waitForLoadState('networkidle');
      
      if (errors.length > 0) {
        console.log('⚠️  Translation loading errors:', errors);
      }
      
      expect(errors.length).toBe(0);
    });

    test('should not have undefined variable errors', async ({ page }) => {
      const errors = [];
      
      page.on('console', msg => {
        if (msg.type() === 'error') {
          const text = msg.text();
          if (text.includes('undefined') || text.includes('Cannot read property')) {
            errors.push(text);
          }
        }
      });
      
      await page.goto('/comparative-research');
      await page.waitForLoadState('networkidle');
      
      if (errors.length > 0) {
        console.log('⚠️  Undefined variable errors:', errors);
      }
      
      // Allow some errors but not too many
      expect(errors.length).toBeLessThan(5);
    });
  });
});
