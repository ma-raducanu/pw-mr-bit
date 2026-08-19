import { test, expect } from '../2-fixtures/pages.fixture';

test.beforeEach(async ({ casinoPage }) => {
  await casinoPage.goToCasino();
  await casinoPage.acceptCookies();
  await casinoPage.sportsLink.click();
});

test('Search for the UEFA Champions League', { tag: '@Regression' }, async ({ sportsPage }) => {
  await sportsPage.searchButton.click();
  await sportsPage.searchInput.fill('uefa champions league');
  await expect(sportsPage.searchResults).toContainText('UEFA Champions League');
  await sportsPage.searchResults.first().click();
  await expect(sportsPage.championshipName).toContainText('UEFA Champions League');
});