import { IWorldOptions,World, setWorldConstructor} from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import {BrowserFixture} from "../fixtures/browserFixture.js";



export class CustomWorld extends World {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    loginPage!: LoginPage;
    browserFixture!: BrowserFixture;

    constructor(options: IWorldOptions) {
        super(options);
    }
    
}
setWorldConstructor(CustomWorld);
