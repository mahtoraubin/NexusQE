import { Page, Locator } from '@playwright/test';

export class LoginPage {

    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly loginErrorMessage: Locator;

    constructor(private readonly page: Page) {
        this.emailInput = page.locator('input[data-qa="login-email"]');

        this.passwordInput = page.locator('input[data-qa="login-password"]');

        this.loginButton = page.locator('button[data-qa="login-button"]');
        this.loginErrorMessage = page.getByText('Your email or password is incorrect!');
    }

    async login(email: string, password: string): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async isLoginSuccessful(): Promise<boolean> {
        // Implementation for checking if login was successful
        return await this.page.getByText('Logged in as').isVisible(); 
    }

    async isLoginErrorVisible(): Promise<boolean> {
        return await this.loginErrorMessage.isVisible();
    }
}