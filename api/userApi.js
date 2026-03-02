const userCredentials = require('../testData/userCredentials.json');

class UserApi {
  constructor(request) {
    this.request = request;
  }
  async login(email, password) {
    const response = await this.request.post(
      'https://dev.delekhomes.com/api/users/login',
      {
        data: {
          email: process.env.ADMIN_EMAIL,
          password: process.env.ADMIN_PASSWORD,
        },
      },
    );
    const body = await response.json();
    return body.accessToken;
  }
}

module.exports = UserApi;
