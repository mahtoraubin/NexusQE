import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { CustomWorld } from "../world/CustomWorld.js";
import { config } from "../config/config.js";
import loginData from "../test-data/login.json" with { type: "json" };

setDefaultTimeout(30000);

// -------------------- UI Login --------------------

Given("the user is on the login page", async function (this: CustomWorld) {
    this.loginPage = new LoginPage(this.page);

    await this.page.goto(`${config.baseUrl}/login`);
});

When("the user logs in with valid credentials", async function (this: CustomWorld) {
    await this.loginPage.login(
        config.credentials.email,
        config.credentials.password
    );

    console.log("User logs in with valid credentials");
});

When("the user logs in with invalid credentials", async function (this: CustomWorld) {
    await this.loginPage.login(
        config.credentials.email,
        loginData.invalidPassword
    );
});

Then("the user should see a login error message", async function (this: CustomWorld) {
    const errorVisible = await this.loginPage.isLoginErrorVisible();

    expect(errorVisible).toBe(true);
});

Then("the user should be logged in successfully", async function (this: CustomWorld) {
    const loginSuccessful = await this.loginPage.isLoginSuccessful();

    expect(loginSuccessful).toBe(true);

    console.log("User is logged in successfully");
});

// -------------------- API Login --------------------

When("the user logs in via API", async function (this: CustomWorld) {
    this.apiResponse = await this.loginApi.login(
        config.credentials.email,
        config.credentials.password
    );

    console.log("API STATUS:", this.apiResponse.status());
});

Then("the API login should be successful", async function (this: CustomWorld) {
    expect(this.apiResponse.status()).toBe(200);

    const responseBody = await this.apiResponse.text();

    console.log("API RESPONSE:", responseBody);

    expect(responseBody).toContain("User exists!");
});

When("the user logs in via API with invalid credentials", async function (this: CustomWorld) {
    this.apiResponse = await this.loginApi.login(
        config.credentials.email,
        loginData.invalidPassword
    );

    console.log("API STATUS:", this.apiResponse.status());
});

Then("the API login should fail", async function (this: CustomWorld) {
    expect(this.apiResponse.status()).toBe(200);

    const responseBody = await this.apiResponse.text();

    console.log("API RESPONSE:", responseBody);

    expect(responseBody).toContain("User not found!");
});