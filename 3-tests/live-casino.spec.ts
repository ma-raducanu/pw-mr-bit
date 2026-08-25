import { test, expect } from '../2-fixtures/page.fixtures';

test.beforeEach(async ({ liveCasinoPage }) => {
  await liveCasinoPage.goToLiveCasinoPage();
});

test('Open the Game modal', { tag: '@Regression' }, async ({ liveCasinoPage }) => {
  await liveCasinoPage.gameGrid.gameCard.first().click();
  await expect(liveCasinoPage.aboutDemoModal.container).toBeVisible();
});

test('Close the Game modal', { tag: '@Regression' }, async ({ liveCasinoPage }) => {
  await liveCasinoPage.gameGrid.gameCard.first().click();
  await liveCasinoPage.aboutDemoModal.closeButton.click();
  await expect(liveCasinoPage.aboutDemoModal.container).not.toBeVisible();
});

test('Verify the Game modal redirect to a different choice of games', { tag: '@Regression' }, async ({ liveCasinoPage, casinoPage }) => {
  await liveCasinoPage.gameGrid.gameCard.first().click();
  await liveCasinoPage.aboutDemoModal.chooseAnotherGameLink.click();
  await expect(casinoPage.page).toHaveURL('https://mrbit.ro/en/games/new');
  await casinoPage.gameGrid.openMenuDropdown();
  await expect(casinoPage.gameGrid.newGamesLink).toHaveClass(/active/);
});