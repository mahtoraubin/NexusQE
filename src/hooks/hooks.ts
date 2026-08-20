import { Before, After } from "@cucumber/cucumber";
import { request } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld.js";
import { BrowserFixture } from "../fixtures/browserFixture.js";
import { LoginApi } from "../api/LoginApi.js";
import { config } from "../config/config.js";

Before(async function (this: CustomWorld) {

    // Browser setup
    this.browserFixture = new BrowserFixture();
    await this.browserFixture.setup();

    this.context = this.browserFixture.context;
    this.page = this.browserFixture.page;

    // API setup
    this.apiRequest = await request.newContext({
        baseURL: config.baseUrl
    });

    this.loginApi = new LoginApi(this.apiRequest);


});

After(async function (this: CustomWorld) {

    // API cleanup
    await this.apiRequest.dispose();

    // Browser cleanup
    await this.browserFixture.teardown();
});