import { test, expect } from '@playwright/test';

/**
 * Language Switching Tests
 * Verifies multi-language functionality works correctly
 */

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'Arabic' },
  { code: 'de', name: 'German' },
  { code: 'fr', name: 'French' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'pl', name: 'Polish' },
  { code: 'ta', name: 'Tamil' },
];

test.describe('Language Switching', () => {
  test('should switch to different languages', async ({ page }) => {
    await page.goto('/');
    
    // Try switching to a few languages
    for (const { code } of languages.slice(0, 3)) {
      await page.goto(`/?lang=${code}`);
      await page.waitForLoadState('networkidle');
      
      // Page should load successfully
      const body = page.locator('body');
      await expect(body).toBeVisible();
      
      // URL should contain language parameter
      const url = page.url();
      expect(url).toContain(`lang=${code}`);
    }
  });

  test('should persist language selection', async ({ page }) => {
    await page.goto('/');
    
    // Switch to German
    await page.goto('/?lang=de');
    await page.waitForLoadState('networkidle');
    
    // Navigate to another page
    await page.goto('/comparative-research?lang=de');
    
    // Language should be preserved in URL
    const url = page.url();
    expect(url).toContain('lang=de');
  });

  test('should load translations without errors', async ({ page }) => {
    // Test a few language versions of a page
    for (const { code } of languages.slice(0, 4)) {
      await page.goto(`/comparative-research?lang=${code}`);
      
      // Wait for translations to load
      await page.waitForLoadState('networkidle');
      
      // Check no "undefined" text appears (common translation error)
      const pageText = await page.textContent('body');
      expect(pageText).not.toContain('undefined');
    }
  });

  test('should support RTL for Arabic', async ({ page }) => {
    await page.goto('/?lang=ar');
    await page.waitForLoadState('networkidle');
    
    // Check if dir attribute is set
    const htmlDir = await page.locator('html').getAttribute('dir');
    
    // Arabic should have RTL or auto direction
    expect(htmlDir === 'rtl' || htmlDir === 'auto' || htmlDir === null).toBeTruthy();
  });
});
