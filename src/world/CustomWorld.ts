import { IWorldOptions,World, setWorldConstructor} from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, APIRequestContext, APIResponse} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import {BrowserFixture} from "../fixtures/browserFixture.js";
import { LoginApi } from "../api/LoginApi.js";



export class CustomWorld extends World {
    
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    loginPage!: LoginPage;
    browserFixture!: BrowserFixture;
    apiRequest!: APIRequestContext;
    apiResponse!: APIResponse;
    loginApi!: LoginApi;
    
    constructor(options: IWorldOptions) {
        super(options);
    }
    
}
setWorldConstructor(CustomWorld);
