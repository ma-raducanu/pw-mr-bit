import type { Locator, Page } from '@playwright/test';

export class AboutDemoModal {
  readonly container: Locator;
  readonly closeButton: Locator;
  readonly chooseAnotherGameButton: Locator;

  constructor(page: Page) {
    this.container = page.locator('div.about-demo-popup');
    this.closeButton = page.locator('button.about-demo-popup__close');
    this.chooseAnotherGameButton = page.getByRole('link', { name: 'Choose another game' });
  }
}