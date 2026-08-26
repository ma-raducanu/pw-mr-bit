import type { Locator, Page } from '@playwright/test';

export class WheelModal {
  readonly container: Locator;
  readonly logInAndSpinButton: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.container = page.getByTestId('fortune-wheel-widget-container');
    this.logInAndSpinButton = page.getByRole('button', { name: 'Log in and spin' });
    this.closeButton = page.getByTestId('fortune-wheel-widget-close-btn');
  }
}