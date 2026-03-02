import { expect } from '@playwright/test';

const DashBoardPage = require('../../page_objects/DashboardPage');
const LoginPage = require('../../page_objects/LoginPage');
const test = require('../fixtures/fixtures');

test.describe('login', () => {
  test('api logout', async ({ authenticatedPage, request, context, page }) => {
    const dashboardPage = new DashBoardPage(page);
    const loginPage = new LoginPage(page);
    await authenticatedPage.goto(
      'https://dev.delekhomes.com/dashboard/user/profile',
    );
    await dashboardPage.clickProfileIcon();
    await dashboardPage.clickLogoutButton();
    expect(loginPage.loginButton).toBeVisible();
  });
});
