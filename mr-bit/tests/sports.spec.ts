import { test, expect } from '../fixtures/page.fixtures';

test.beforeEach(async ({ sportsPage }) => {
  await sportsPage.goToPage('https://mrbit.ro/en/betting');
});

test('Search for Serie A', { tag: '@Regression' }, async ({ sportsPage }) => {
  await sportsPage.searchButton.click();
  await sportsPage.searchInput.fill('serie a');
  const specificResult = sportsPage.searchResults.filter({ hasText: /^Football • ItalySerie A$/ });
  await expect(specificResult).toBeVisible();
  await specificResult.click();
  await expect(sportsPage.championshipName).toHaveText(/^Serie A • Italy$/);
});