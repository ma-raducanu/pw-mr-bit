import { test, expect } from '../2-fixtures/page.fixtures';

test.beforeEach(async ({ casinoPage }) => {
  await casinoPage.goToCasinoPage();
});

test('Navigate to the Casino page', { tag: '@Regression' }, async ({ casinoPage }) => {
  await expect(casinoPage.casinoLink).toHaveClass(/active/);
});

test('Verify the Story order', { tag: '@Regression' }, async ({ casinoPage }) => {
  await expect(casinoPage.storyGroup).toHaveText(['Fortune Wheel', 'Welcome Package', 'Our advantages', 'More bonuses', 'Always online']);
});

test('Navigate to the Live Casino page', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.liveCasinoLink.click();
  await expect(casinoPage.page).toHaveURL('https://mrbit.ro/en/games/live');
  await expect(casinoPage.liveCasinoLink).toHaveClass(/active/);
});

test('Navigate to the Sports page', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.sportsLink.click();
  await expect(casinoPage.page).toHaveURL('https://mrbit.ro/en/betting');
  await expect(casinoPage.sportsLink).toHaveClass(/active/);
});

test('Navigate to the Lotto page', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.lottoLink.click();
  await expect(casinoPage.page).toHaveURL('https://mrbit.ro/en/lotto');
  await expect(casinoPage.lottoLink).toHaveClass(/active/);
});

test('Open the Wheel modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.wheelLink.click();
  await expect(casinoPage.wheelModal.container).toBeVisible();
});

test('Close the Wheel modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.wheelLink.click();
  await casinoPage.wheelModal.closeButton.click();
  await expect(casinoPage.wheelModal.container).not.toBeVisible();
});

test('Open the Login modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.logInLink.click();
  await expect(casinoPage.loginModal.container).toBeVisible();
});

test('Open the Login modal from the Sign-up modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.signUpLink.click();
  await casinoPage.signUpModal.logInButton.click();
  await expect(casinoPage.loginModal.container).toBeVisible();
});

test('Open the Login modal from the Wheel modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.wheelLink.click();
  await casinoPage.wheelModal.logInAndSpinButton.click();
  await expect(casinoPage.loginModal.container).toBeVisible();
});

test('Close the Login modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.logInLink.click();
  await casinoPage.loginModal.closeButton.click();
  await expect(casinoPage.loginModal.container).not.toBeVisible();
});

test('Verify the Login modal contents', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.logInLink.click();
  await expect(casinoPage.loginModal.container).toBeVisible();
  await expect(casinoPage.loginModal.emailInput).toBeVisible();
  await expect(casinoPage.loginModal.passwordInput).toBeVisible();
  await expect(casinoPage.loginModal.forgotPasswordLink).toBeVisible();
  await expect(casinoPage.loginModal.logInButton).toBeVisible();
  await expect(casinoPage.loginModal.registerLink).toBeVisible();
  await expect(casinoPage.loginModal.googleButton).toBeVisible();
  await expect(casinoPage.loginModal.googleFrame.getByText(/^Continue with Google$/)).toBeVisible();
});

test('Open the Sign-up modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.signUpLink.click();
  await expect(casinoPage.signUpModal.container).toBeVisible();
});

test('Open the Sign-up modal from the Login modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.logInLink.click();
  await casinoPage.loginModal.registerLink.click();
  await expect(casinoPage.signUpModal.container).toBeVisible();
});

test('Close the Sign-up modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.signUpLink.click();
  await casinoPage.signUpModal.closeButton.click();
  await casinoPage.signUpModal.closeButton.nth(1).click();
  await expect(casinoPage.signUpModal.container).not.toBeVisible();
});

test('Verify the Sign-up modal contents', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.signUpLink.click();
  await expect(casinoPage.signUpModal.container).toBeVisible();
  await expect(casinoPage.signUpModal.googleButton).toBeVisible();
  await expect(casinoPage.signUpModal.emailButton).toBeVisible();
  await expect(casinoPage.signUpModal.logInButton).toBeVisible();
  await expect(casinoPage.signUpModal.emailInput).toBeVisible();
  await expect(casinoPage.signUpModal.continueButton).toBeVisible();
  await expect(casinoPage.signUpModal.continueButton).toBeDisabled();
});