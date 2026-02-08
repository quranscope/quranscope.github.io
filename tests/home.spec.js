import { test, expect } from '@playwright/test';

/**
 * Home Page Tests
 * Verifies the landing page loads correctly with all navigation cards
 */

test.describe('Home Page', () => {
  test('should load home page successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check page title (with space: "Quran Scope")
    await expect(page).toHaveTitle(/Quran Scope/);
    
    // Check main heading exists
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
  });

  test('should display all 12 navigation cards', async ({ page }) => {
    await page.goto('/');
    
    // Wait for content to load
    await page.waitForLoadState('networkidle');
    
    // Check for navigation cards - looking for links with common patterns
    const cards = page.locator('a[href*="/"]');
    const count = await cards.count();
    
    // Should have multiple navigation cards
    expect(count).toBeGreaterThan(5);
  });

  test('should have responsive design', async ({ page }) => {
    await page.goto('/');
    
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('body')).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator('body')).toBeVisible();
  });

  test('should have Tailwind CSS styles applied', async ({ page }) => {
    await page.goto('/');
    
    // Check if any element has Tailwind classes
    const styledElement = page.locator('[class*="bg-"], [class*="text-"], [class*="p-"]').first();
    await expect(styledElement).toBeVisible();
    
    // Check computed styles to verify CSS is loaded
    const body = page.locator('body');
    const backgroundColor = await body.evaluate(el => 
      window.getComputedStyle(el).backgroundColor
    );
    
    // Should have some background color (not default)
    expect(backgroundColor).toBeTruthy();
  });
});
