import type { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LiveCasinoPage extends BasePage {
  readonly noDemoModal: Locator;
  readonly noDemoModalCloseButton: Locator;
  readonly noDemoModalChooseAnotherGameLink: Locator;

  constructor(page: Page) {
    super(page);
    this.noDemoModal = page.locator('div.about-demo-popup');
    this.noDemoModalCloseButton = page.locator('button.about-demo-popup__close');
    this.noDemoModalChooseAnotherGameLink = page.getByRole('link', { name: 'Choose another game' });
  }
}