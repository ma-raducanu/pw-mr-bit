import { test, expect } from '../2-fixtures/pages.fixture';

test.beforeEach(async ({ casinoPage }) => {
  await casinoPage.goToCasino();
  await casinoPage.acceptCookies();
  await casinoPage.liveCasinoLink.click();
});

test('Open the Game modal', { tag: '@Regression' }, async ({ casinoPage, liveCasinoPage }) => {
  await casinoPage.gameCard.first().click();
  await expect(liveCasinoPage.noDemoModal).toBeVisible();
});

test('Close the Game modal', { tag: '@Regression' }, async ({ casinoPage, liveCasinoPage }) => {
  await casinoPage.gameCard.first().click();
  await liveCasinoPage.noDemoModalCloseButton.click();
  await expect(liveCasinoPage.noDemoModal).not.toBeVisible();
});

test('Verify the Game modal redirect to a different choice of games', { tag: '@Regression' }, async ({ casinoPage, liveCasinoPage }) => {
  await casinoPage.gameCard.first().click();
  await liveCasinoPage.noDemoModalChooseAnotherGameLink.click();
  await casinoPage.expectUrl('https://mrbit.ro/en/games/new');
  if (!await casinoPage.newGamesLink.isVisible()) {
    await casinoPage.menuDropdown.click();
  }
  await expect(casinoPage.newGamesLink).toHaveClass(/active/);
});