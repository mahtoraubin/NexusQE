import {chromium,firefox,webkit, Browser, BrowserContext, Page} from 'playwright';
import { config } from '../config/config.js';

export class BrowserFixture {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    async setup(): Promise<void> {
        let browserType;
        switch (config.browser.toLowerCase()) {
            case 'firefox':
                browserType = firefox;
                break;
            case 'webkit':
                browserType = webkit;
                break;
            default:
                browserType = chromium;
        }
        this.browser = await browserType.launch({headless: config.headless});
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }
    async teardown(): Promise<void> {
        await this.page?.close();
        await this.context?.close();
        await this.browser?.close();
    }
}