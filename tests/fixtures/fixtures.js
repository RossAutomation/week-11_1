const { test } = require('@playwright/test');
const UserApi = require('../../api/userApi');
const ListingApi = require('../../api/listingApi');
const DashBoardPage = require('../../page_objects/DashboardPage');
const LoginPage = require('../../page_objects/LoginPage');
const userCredentials = require('../../testData/userCredentials.json');
const extended = test.extend({
  authenticatedPage: async ({ page, request }, use) => {
    const dashboardPage = new DashBoardPage(page);
    const loginPage = new LoginPage(page);
    const userApi = new UserApi(request);
    const accessToken = await userApi.login(
      userCredentials.admin.email,
      userCredentials.admin.password,
    );
    await page.addInitScript((token) => {
      window.localStorage.setItem('accessToken', token);
    }, accessToken);
    await use(page);
  },
  createdListing: async ({ request }, use) => {
    const userApi = new UserApi(request);
    const accessToken = await userApi.login(
      userCredentials.realtor.email,
      userCredentials.realtor.password,
    );
    const listingApi = new ListingApi(request, accessToken);
    const listing = await listingApi.createListing();
    await use(listing);
    console.log(`Deleting the listing ${listing.id}`);
    await listingApi.deleteListing(listing.id);
  },
});

module.exports = extended;
