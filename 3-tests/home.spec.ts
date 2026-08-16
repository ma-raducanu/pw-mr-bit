import { test, expect } from '../2-fixtures/pages.fixture';

test.beforeEach(async ({ casinoPage }) => {
  await casinoPage.goToHome();
  await casinoPage.acceptCookies();
});

test('Verify casino page', async ({ casinoPage }) => {
  await expect(casinoPage.casinoLink).toHaveClass(/active/);
  await expect(casinoPage.promoBlock).toContainText(['Roata Norocului', 'Pachet de Bun Venit', 'Avantajele noastre', 'Mai multe bonusuri', 'Mereu online']);
});

test('Verify live dealer link', async ({ casinoPage }) => {
  await casinoPage.liveDealerLink.click();
  await expect(casinoPage.liveDealerLink).toHaveClass(/active/);
});

test('Verify sports link', async ({ casinoPage }) => {
  await casinoPage.sportsLink.click();
  await expect(casinoPage.sportsLink).toHaveClass(/active/);
});

test('Verify lotto link', async ({ casinoPage }) => {
  await casinoPage.lottoLink.click();
  await expect(casinoPage.lottoLink).toHaveClass(/active/);
});

test('Verify wheel link', async ({ casinoPage }) => {
  await casinoPage.wheelLink.click();
  await casinoPage.closeWheelButton.click();  
  await expect(casinoPage.casinoLink).toHaveClass(/active/);
});

test('Verify wheel link auth redirect', async ({ casinoPage }) => {
  await casinoPage.wheelLink.click();
  await casinoPage.authenticateAndSpinButton.click();
  await expect(casinoPage.loginForm).toBeVisible();
});