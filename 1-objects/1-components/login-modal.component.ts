import type { Locator, FrameLocator, Page } from '@playwright/test';

export class LoginModal {
  readonly page: Page;
  readonly container: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly forgotPasswordLink: Locator;
  readonly logInButton: Locator;
  readonly registerLink: Locator;
  readonly googleButton: Locator;
  readonly googleFrame: FrameLocator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.container = page.getByTestId('login-popup-form');
    this.emailInput = page.getByTestId('login-popup-form-input-name');
    this.passwordInput = page.getByTestId('login-popup-form-input-password');
    this.forgotPasswordLink = page.locator('.login-popup__forgot-password', { hasText: 'Forgot password?' });
    this.logInButton = page.getByRole('button', { name: 'Log in' });
    this.registerLink = page.locator('.login-popup__register-link', {hasText: 'Register'});
    this.googleButton = page.locator('div[class*="GoogleButton"][class*="button"]');
    this.googleFrame = page.frameLocator('iframe[title="Sign in with Google Button"]');
    this.closeButton = page.getByTestId('login-popup-close');
  }
}