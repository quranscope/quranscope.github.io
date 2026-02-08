import { test, expect } from '@playwright/test';

/**
 * STRICT Content Validation Tests
 * 
 * These tests enforce ZERO-TOLERANCE for:
 * 1. Empty headings, titles, or card content
 * 2. Duplicate content rendering
 * 3. Missing translation values
 * 4. Visible translation key names
 */

test.describe('STRICT: Home Page Content Validation', () => {
  
  test('should have NO empty headings', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check all h1, h2, h3, h4 elements
    const headings = await page.locator('h1, h2, h3, h4').all();
    const emptyHeadings = [];
    
    for (let i = 0; i < headings.length; i++) {
      const text = await headings[i].textContent();
      const trimmed = text?.trim() || '';
      const tag = await headings[i].evaluate(el => el.tagName.toLowerCase());
      
      if (trimmed.length === 0) {
        const outerHTML = await headings[i].evaluate(el => el.outerHTML.substring(0, 200));
        emptyHeadings.push({
          tag,
          html: outerHTML,
          index: i
        });
      }
    }
    
    if (emptyHeadings.length > 0) {
      console.error('❌ CRITICAL: Found empty headings:');
      emptyHeadings.forEach(({ tag, html, index }) => {
        console.error(`   [${index}] <${tag}> - ${html}`);
      });
      
      await page.screenshot({ 
        path: `test-results/empty-headings-home.png`,
        fullPage: true 
      });
    }
    
    expect(emptyHeadings.length, `Found ${emptyHeadings.length} empty heading(s)`).toBe(0);
  });

  test('should have NO empty card titles', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Find all card titles (h3 inside cards)
    const cardTitles = await page.locator('.bg-white h3, [class*="card"] h3, [class*="rounded"] h3').all();
    const emptyTitles = [];
    
    for (let i = 0; i < cardTitles.length; i++) {
      const text = await cardTitles[i].textContent();
      const trimmed = text?.trim() || '';
      
      if (trimmed.length === 0) {
        const parentHTML = await cardTitles[i].evaluate(el => 
          el.parentElement?.outerHTML.substring(0, 300) || 'N/A'
        );
        emptyTitles.push({
          index: i,
          html: parentHTML
        });
      }
    }
    
    if (emptyTitles.length > 0) {
      console.error('❌ CRITICAL: Found empty card titles:');
      emptyTitles.forEach(({ index, html }) => {
        console.error(`   Card ${index}: ${html}`);
      });
      
      await page.screenshot({ 
        path: `test-results/empty-card-titles.png`,
        fullPage: true 
      });
    }
    
    expect(emptyTitles.length, `Found ${emptyTitles.length} empty card title(s)`).toBe(0);
  });

  test('should have NO empty paragraphs in cards', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Find all paragraphs inside cards
    const cardParagraphs = await page.locator('.bg-white p, [class*="card"] p').all();
    const emptyParagraphs = [];
    
    for (let i = 0; i < cardParagraphs.length; i++) {
      const text = await cardParagraphs[i].textContent();
      const trimmed = text?.trim() || '';
      
      if (trimmed.length === 0) {
        const className = await cardParagraphs[i].getAttribute('class');
        const parentHTML = await cardParagraphs[i].evaluate(el => 
          el.parentElement?.outerHTML.substring(0, 200) || 'N/A'
        );
        emptyParagraphs.push({
          index: i,
          className,
          parent: parentHTML
        });
      }
    }
    
    if (emptyParagraphs.length > 0) {
      console.error('❌ CRITICAL: Found empty paragraphs in cards:');
      emptyParagraphs.forEach(({ index, className, parent }) => {
        console.error(`   [${index}] class="${className}" - ${parent}`);
      });
      
      await page.screenshot({ 
        path: `test-results/empty-paragraphs.png`,
        fullPage: true 
      });
    }
    
    expect(emptyParagraphs.length, `Found ${emptyParagraphs.length} empty paragraph(s) in cards`).toBe(0);
  });

  test('should have NO duplicate text content', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Get all visible text content from main elements
    const h1Text = await page.locator('h1').allTextContents();
    const h2Text = await page.locator('h2').allTextContents();
    const h3Text = await page.locator('h3').allTextContents();
    
    // Check for duplicates in h1
    const h1Duplicates = findDuplicates(h1Text.filter(t => t.trim().length > 0));
    const h2Duplicates = findDuplicates(h2Text.filter(t => t.trim().length > 0));
    const h3Duplicates = findDuplicates(h3Text.filter(t => t.trim().length > 0));
    
    const allDuplicates = [
      ...h1Duplicates.map(d => ({ tag: 'h1', text: d })),
      ...h2Duplicates.map(d => ({ tag: 'h2', text: d })),
      ...h3Duplicates.map(d => ({ tag: 'h3', text: d }))
    ];
    
    if (allDuplicates.length > 0) {
      console.error('❌ CRITICAL: Found duplicate content:');
      allDuplicates.forEach(({ tag, text }) => {
        console.error(`   <${tag}>: "${text}"`);
      });
      
      await page.screenshot({ 
        path: `test-results/duplicate-content.png`,
        fullPage: true 
      });
    }
    
    expect(allDuplicates.length, `Found ${allDuplicates.length} duplicate text(s)`).toBe(0);
  });

  test('should have NO visible translation key names', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const bodyText = await page.textContent('body');
    
    // Common translation key patterns
    const keyPatterns = [
      /cards_\w+_title/g,
      /cards_\w+_subtitle/g,
      /cards_\w+_description/g,
      /cards_\w+_button/g,
      /translations\./g,
      /\{translations\./g,
    ];
    
    const foundKeys = [];
    
    for (const pattern of keyPatterns) {
      const matches = bodyText?.match(pattern) || [];
      foundKeys.push(...matches);
    }
    
    if (foundKeys.length > 0) {
      console.error('❌ CRITICAL: Found visible translation key names:');
      const uniqueKeys = [...new Set(foundKeys)];
      uniqueKeys.forEach(key => {
        console.error(`   - ${key}`);
      });
      
      // Find elements containing these keys
      for (const key of uniqueKeys.slice(0, 3)) {
        const elements = await page.locator(`text=${key}`).all();
        if (elements.length > 0) {
          const html = await elements[0].evaluate(el => el.outerHTML.substring(0, 200));
          console.error(`     Location: ${html}`);
        }
      }
      
      await page.screenshot({ 
        path: `test-results/translation-keys-visible.png`,
        fullPage: true 
      });
    }
    
    expect(foundKeys.length, `Found ${foundKeys.length} visible translation key(s)`).toBe(0);
  });

  test('should have proper card structure with all fields', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Find all cards
    const cards = await page.locator('.bg-white.rounded-2xl, .bg-white[class*="rounded"]').all();
    const incompleteCards = [];
    
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      
      // Each card should have:
      // 1. A heading (h3)
      const h3 = await card.locator('h3').first();
      const h3Text = await h3.textContent();
      
      // 2. Subtitle paragraph
      const subtitleP = await card.locator('p.font-bold, p[class*="bold"]').first();
      const subtitleText = await subtitleP.textContent().catch(() => '');
      
      // 3. Description paragraph
      const descP = await card.locator('p.text-slate-600, p[class*="slate-600"]').first();
      const descText = await descP.textContent().catch(() => '');
      
      // 4. Button text
      const buttonSpan = await card.locator('span').last();
      const buttonText = await buttonSpan.textContent().catch(() => '');
      
      const missing = [];
      if (!h3Text?.trim()) missing.push('title');
      if (!subtitleText?.trim()) missing.push('subtitle');
      if (!descText?.trim()) missing.push('description');
      if (!buttonText?.trim()) missing.push('button');
      
      if (missing.length > 0) {
        const cardHTML = await card.evaluate(el => el.outerHTML.substring(0, 300));
        incompleteCards.push({
          index: i,
          missing,
          html: cardHTML
        });
      }
    }
    
    if (incompleteCards.length > 0) {
      console.error('❌ CRITICAL: Found incomplete cards:');
      incompleteCards.forEach(({ index, missing, html }) => {
        console.error(`   Card ${index} missing: ${missing.join(', ')}`);
        console.error(`   HTML: ${html}`);
      });
      
      await page.screenshot({ 
        path: `test-results/incomplete-cards.png`,
        fullPage: true 
      });
    }
    
    expect(incompleteCards.length, `Found ${incompleteCards.length} incomplete card(s)`).toBe(0);
  });

  test('should NOT have "undefined" text anywhere', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const bodyText = await page.textContent('body');
    const hasUndefined = bodyText?.includes('undefined') || false;
    
    if (hasUndefined) {
      // Find all elements with "undefined"
      const undefinedElements = await page.locator('text=undefined').all();
      
      console.error(`❌ CRITICAL: Found "undefined" text in ${undefinedElements.length} location(s)`);
      
      for (let i = 0; i < Math.min(undefinedElements.length, 5); i++) {
        const el = undefinedElements[i];
        const html = await el.evaluate(e => e.outerHTML.substring(0, 200));
        const text = await el.textContent();
        console.error(`   [${i}]: ${text?.substring(0, 50)} - ${html}`);
      }
      
      await page.screenshot({ 
        path: `test-results/undefined-text.png`,
        fullPage: true 
      });
    }
    
    expect(hasUndefined, 'Found "undefined" text on page').toBe(false);
  });
});

// Helper function to find duplicates in an array
function findDuplicates(arr) {
  const seen = new Map();
  const duplicates = [];
  
  for (const item of arr) {
    const normalized = item.trim();
    if (normalized.length === 0) continue;
    
    if (seen.has(normalized)) {
      if (seen.get(normalized) === 1) {
        duplicates.push(normalized);
      }
      seen.set(normalized, seen.get(normalized) + 1);
    } else {
      seen.set(normalized, 1);
    }
  }
  
  return duplicates;
}
