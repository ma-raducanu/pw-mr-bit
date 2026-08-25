import type { Locator, Page } from '@playwright/test';

export class GameGrid {
  readonly menuDropdown: Locator;
  readonly newGamesLink: Locator;
  readonly gameCard: Locator;

  constructor(page: Page) {
    this.menuDropdown = page.locator('div.responsive-menu__dropdown');
    this.newGamesLink = page.getByRole('link', { name: 'New' });
    this.gameCard = page.locator('div.game-cell-outer');
  }

  async openMenuDropdown(): Promise<void> {
    if (!await this.newGamesLink.isVisible()) {
      await this.menuDropdown.click();
    }
  }
}