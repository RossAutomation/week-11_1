class HomePage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.getByRole('link', { name: 'Login' });
    this.RegisterLink = page.getByRole('link', { name: 'Register' });
  }
  async clickLoginLink() {
    await this.loginLink.click();
  }

  async clickRegisterLink() {
    await this.RegisterLink.click();
  }
  async search(title) {
    return `https://dev.delekhomes.com/featured-listings?keyword=${title}`;
  }
}
module.exports = HomePage;
