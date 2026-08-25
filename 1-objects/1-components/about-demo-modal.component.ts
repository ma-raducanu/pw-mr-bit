import type { Locator, Page } from '@playwright/test';

export class AboutDemoModal {
  readonly page: Page;
  readonly container: Locator;
  readonly closeButton: Locator;
  readonly chooseAnotherGameLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.container = page.locator('div.about-demo-popup');
    this.closeButton = page.locator('button.about-demo-popup__close');
    this.chooseAnotherGameLink = page.getByRole('link', { name: 'Choose another game' });
  }
}