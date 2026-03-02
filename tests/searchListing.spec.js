const { expect } = require('@playwright/test');
const HomePage = require('../page_objects/HomePage.js');
const test = require('./fixtures/fixtures.js');

test.describe('Listing', () => {
  var homePage;
  test('Search for listing', async ({ createdListing, page }) => {
    homePage = new HomePage(page);
    const result = await homePage.search(createdListing.title);
    await page.goto(result);
    await expect(page.getByText(createdListing.title)).toBeVisible();
  });
});
