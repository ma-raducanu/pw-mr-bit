import { test, expect } from '../2-fixtures/page-fixtures';

test.beforeEach(async ({ liveCasinoPage }) => {
  await liveCasinoPage.goToLiveCasinoPage();
});

test('Open the Game modal', { tag: '@Regression' }, async ({ liveCasinoPage }) => {
  await liveCasinoPage.gameCard.first().click();
  await expect(liveCasinoPage.noDemoModal).toBeVisible();
});

test('Close the Game modal', { tag: '@Regression' }, async ({ liveCasinoPage }) => {
  await liveCasinoPage.gameCard.first().click();
  await liveCasinoPage.noDemoModalCloseButton.click();
  await expect(liveCasinoPage.noDemoModal).not.toBeVisible();
});

test('Verify the Game modal redirect to a different choice of games', { tag: '@Regression' }, async ({ casinoPage, liveCasinoPage }) => {
  await liveCasinoPage.gameCard.first().click();
  await liveCasinoPage.noDemoModalChooseAnotherGameLink.click();
  await expect(casinoPage.page).toHaveURL('https://mrbit.ro/en/games/new');
  if (!await casinoPage.newGamesLink.isVisible()) {
    await casinoPage.menuDropdown.click();
  }
  await expect(casinoPage.newGamesLink).toHaveClass(/active/);
});