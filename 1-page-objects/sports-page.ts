import type { Locator, Page } from '@playwright/test';

export class SportsPage {
  protected readonly page: Page;
  readonly searchButton: Locator;
  readonly searchInput: Locator;
  readonly searchResults: Locator;
  readonly championshipName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.searchInput = page.locator('input[class*="SearchInput"]');
    this.searchResults = page.locator('div[class*="EventSearchResultList"]');
    this.championshipName = page.locator('div[class*="ChampionshipName"]');
  }
}