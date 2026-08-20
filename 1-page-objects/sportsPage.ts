import type { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class SportsPage extends BasePage {
  readonly searchButton: Locator;
  readonly searchInput: Locator;
  readonly searchResults: Locator;
  readonly championshipName: Locator;

  constructor(page: Page) {
    super(page);
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.searchInput = page.locator('input[class*="SearchInput"]');
    this.searchResults = page.locator('div[class*="EventSearchResultList"]');
    this.championshipName = page.locator('div[class*="ChampionshipName"]');
  }
}