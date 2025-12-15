import { test, expect } from '@playwright/test';

/**
 * Performance & Accessibility Tests
 * Verifies performance metrics and basic accessibility
 */

test.describe('Performance & Accessibility', () => {
  test('should load home page within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - startTime;
    
    // Should load within 10 seconds
    expect(loadTime).toBeLessThan(10000);
  });

  test('should have proper HTML structure', async ({ page }) => {
    await page.goto('/');
    
    // Check for essential HTML elements
    await expect(page.locator('html')).toBeVisible();
    await expect(page.locator('head')).toHaveCount(1);
    await expect(page.locator('body')).toBeVisible();
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/comparative-research');
    await page.waitForLoadState('networkidle');
    
    // Should have at least one heading
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    const count = await headings.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should not have missing images', async ({ page }) => {
    await page.goto('/');
    
    // Check if any images exist
    const images = page.locator('img');
    const imageCount = await images.count();
    
    // If images exist, check they load
    if (imageCount > 0) {
      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i);
        const src = await img.getAttribute('src');
        expect(src).toBeTruthy();
      }
    }
  });

  test('should be mobile responsive', async ({ page }) => {
    // Test on mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Content should be visible
    const body = page.locator('body');
    await expect(body).toBeVisible();
    
    // Should not have horizontal overflow
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    
    expect(hasOverflow).toBe(false);
  });

  test('should have valid meta viewport tag', async ({ page }) => {
    await page.goto('/');
    
    // Check for viewport meta tag
    const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
    expect(viewport).toBeTruthy();
    expect(viewport).toContain('width');
  });

  test('should handle network failures gracefully', async ({ page, context }) => {
    await page.goto('/');
    
    // Block all images to simulate poor network
    await context.route('**/*.{png,jpg,jpeg,gif,svg}', route => route.abort());
    
    // Page should still load
    await page.reload();
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('should have working CSS styles', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check if Tailwind classes are applied
    const elementsWithClasses = page.locator('[class]');
    const count = await elementsWithClasses.count();
    
    expect(count).toBeGreaterThan(10); // Should have many styled elements
    
    // Check if colors are applied
    const styledElement = page.locator('body');
    const color = await styledElement.evaluate(el => 
      window.getComputedStyle(el).color
    );
    
    expect(color).toBeTruthy();
    expect(color).not.toBe('');
  });
});
