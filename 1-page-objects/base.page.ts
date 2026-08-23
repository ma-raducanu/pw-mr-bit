import type { Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly acceptCookiesButton: Locator;
  readonly gameCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookiesButton = page.getByRole('button', { name: 'Allow all' });
    this.gameCard = page.locator('div.game-cell-outer');
  }

  async goToPage(url: string): Promise<void> {
    await this.page.goto(url);
    await this.acceptCookiesButton.click();
  };
}