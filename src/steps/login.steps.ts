import { Given, When, Then, After, setDefaultTimeout } from "@cucumber/cucumber";
import {chromium,Browser,Page,BrowserContext, expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { CustomWorld } from "../world/CustomWorld.js";
import { config } from "../config/config.js";
import loginData from "../test-data/login.json" with { type: "json" };
setDefaultTimeout(30000);


Given("the user is on the login page", async function (this: CustomWorld) {
    this.loginPage = new LoginPage(this.page);
   await this.page.goto(`${config.baseUrl}/login`);

});

When("the user logs in with valid credentials", async function (this: CustomWorld) {
    await this.loginPage.login(config.credentials.email, config.credentials.password);
    console.log("User logs in with valid credentials");

});

When("the user logs in with invalid credentials", async function (this: CustomWorld) {
    await this.loginPage.login(config.credentials.email, loginData.invalidPassword);
});

Then(
  "the user should see a login error message",
  async function (this: CustomWorld) {

    const errorVisible =
      await this.loginPage.isLoginErrorVisible();

    expect(errorVisible).toBe(true);
  }
);

Then("the user should be logged in successfully", async function (this: CustomWorld) {
    const loginSuccessful = await this.loginPage.isLoginSuccessful();
    expect(loginSuccessful).toBe(true);
    console.log("User is logged in successfully");

});
