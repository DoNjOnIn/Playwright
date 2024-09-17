const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  constructor(page) {
    this.page = page;
    this.loginButton = page.locator('#login');
    this.usernameField = page.locator('#userName');
    this.passwordField = page.locator('#password');
  }

  async goto() {
    await this.page.goto('https://demoqa.com/login');
  }

  async successfulLogin() {
    await this.usernameField.fill('qwer');
    await this.passwordField.fill('!QAZ2wsx');
    await this.loginButton.click();
    await this.page.waitForSelector('#submit');
    const logoutbutton = await this.page.getByRole('button',{name: 'Log out'});
    await expect(logoutbutton).toBeVisible();
  }

  async failedLogin() {
    await this.usernameField.fill('qwe1');
    await this.passwordField.fill('!QAx');
    await this.loginButton.click();
    await expect(await this.page.getByText('Invalid username or password!')).toBeVisible();
  }

  async logOut() {
    this.goto()
    if (this.page.getByRole('button',{name: 'Log out'}).isVisible()){
        this.page.getByRole('button',{name: 'Log out'}).click();
    };
  }
};