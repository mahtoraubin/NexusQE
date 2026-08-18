import {Before, After} from '@cucumber/cucumber';
import { CustomWorld } from '../world/CustomWorld.js';
import {BrowserFixture} from "../fixtures/browserFixture.js";

Before(async function (this: CustomWorld) {
    
    this.browserFixture = new BrowserFixture();
    await this.browserFixture.setup();
    this.context = this.browserFixture.context;
    this.page = this.browserFixture.page;

    console.log("PAGE CREATED:", !!this.page);
});


After(async function (this: CustomWorld) {
    await this.browserFixture.teardown();
});
