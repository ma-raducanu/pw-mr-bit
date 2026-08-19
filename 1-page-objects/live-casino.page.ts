import type { Locator, Page } from '@playwright/test';

export class LiveCasinoPage {
  protected readonly page: Page;
  readonly noDemoModal: Locator;
  readonly noDemoModalCloseButton: Locator;
  readonly noDemoModalChooseAnotherGameLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.noDemoModal = page.locator('div.about-demo-popup');
    this.noDemoModalCloseButton = page.locator('button.about-demo-popup__close');
    this.noDemoModalChooseAnotherGameLink = page.getByRole('link', { name: 'Choose another game' });
  }
}