import type { Locator, Page } from '@playwright/test';

export class SignUpModal {
  readonly page: Page;
  readonly container: Locator;
  readonly googleButton: Locator;
  readonly emailButton: Locator;
  readonly logInButton: Locator;
  readonly emailInput: Locator;
  readonly continueButton: Locator;
  readonly closeButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.container = page.locator('div.signup-widget-popup');
    this.googleButton = page.getByRole('button', { name: 'Sign up with Google' });
    this.emailButton = page.getByRole('button', { name: 'Sign up with Email' });
    this.logInButton = page.getByRole('button', { name: 'Log in here' });
    this.emailInput = page.locator('input[name="email"]');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.closeButton = page.getByTestId('signup-widget-close-btn');
  }
}