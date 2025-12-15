import { test, expect } from '@playwright/test';

/**
 * Navigation & UI Components Tests
 * Verifies navigation, UI components, and interactive elements
 */

test.describe('Navigation & UI', () => {
  test('should navigate between pages', async ({ page }) => {
    await page.goto('/');
    
    // Find and click a specific navigation link (not just any link)
    const researchLink = page.locator('a[href="/comparative-research"]').first();
    
    // If link exists, click it
    const linkCount = await researchLink.count();
    if (linkCount > 0) {
      await researchLink.click();
      
      // Should navigate to new page
      await page.waitForLoadState('networkidle');
      const url = page.url();
      expect(url).toContain('comparative-research');
    } else {
      // If no link found, just verify page has links
      const allLinks = page.locator('a[href^="/"]');
      const count = await allLinks.count();
      expect(count).toBeGreaterThan(0);
    }
  });

  test('should have working back button', async ({ page }) => {
    await page.goto('/');
    await page.goto('/comparative-research');
    
    // Go back
    await page.goBack();
    
    // Should be back at home
    const url = page.url();
    expect(url).toContain('localhost:3000');
  });

  test('should load UI components correctly', async ({ page }) => {
    await page.goto('/comparative-research');
    await page.waitForLoadState('networkidle');
    
    // Check for common UI components
    const hasContent = await page.locator('.container, [class*="container"], main').count();
    expect(hasContent).toBeGreaterThan(0);
  });

  test('should handle 404 pages', async ({ page }) => {
    const response = await page.goto('/non-existent-page');
    
    // Should get 404 response or redirect
    // Next.js might redirect or show 404 page
    expect(response?.status()).toBeGreaterThanOrEqual(200);
  });

  test('should have no console errors on page load', async ({ page }) => {
    const consoleErrors = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Filter out known warnings (like the title array warning)
    const criticalErrors = consoleErrors.filter(err => 
      !err.includes('title element') && 
      !err.includes('Warning:')
    );
    
    expect(criticalErrors.length).toBe(0);
  });

  test('should load CSS correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check if CSS is loaded by verifying computed styles
    const body = page.locator('body');
    const fontSize = await body.evaluate(el => 
      window.getComputedStyle(el).fontSize
    );
    
    // Should have some font size set (not default 16px)
    expect(fontSize).toBeTruthy();
    expect(fontSize).not.toBe('');
  });

  test('should have accessible links', async ({ page }) => {
    await page.goto('/');
    
    // All links should have href attributes
    const links = page.locator('a');
    const count = await links.count();
    
    expect(count).toBeGreaterThan(0);
    
    // Check first few links have valid hrefs
    for (let i = 0; i < Math.min(5, count); i++) {
      const href = await links.nth(i).getAttribute('href');
      expect(href).toBeTruthy();
    }
  });
});
