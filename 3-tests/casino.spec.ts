import { test, expect } from '../2-fixtures/page.fixtures';

test.beforeEach(async ({ casinoPage }) => {
  await casinoPage.goToCasinoPage();
});

test('Navigate to the Casino page', { tag: '@Regression' }, async ({ casinoPage }) => {
  await expect(casinoPage.casinoLink).toHaveClass(/active/);
});

test('Verify the Story order', async ({ casinoPage }) => {
  await expect(casinoPage.storyGroup).toContainText(['Fortune Wheel', 'Welcome Package', 'Our advantages', 'More bonuses', 'Always online']);
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
  await expect(casinoPage.wheelModal).toBeVisible();
});

test('Close the Wheel modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.wheelLink.click();
  await casinoPage.wheelModalCloseButton.click();
  await expect(casinoPage.wheelModal).not.toBeVisible();
});

test('Open the Login modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.logInLink.click();
  await expect(casinoPage.loginModal).toBeVisible();
});

test('Open the Login modal from the Sign-up modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.signUpLink.click();
  await casinoPage.signUpModalLogInButton.click();
  await expect(casinoPage.loginModal).toBeVisible();
});

test('Open the Login modal from the Wheel modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.wheelLink.click();
  await casinoPage.wheelModalLogInAndSpinButton.click();
  await expect(casinoPage.loginModal).toBeVisible();
});

test('Close the Login modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.logInLink.click();
  await casinoPage.loginModalCloseButton.click();
  await expect(casinoPage.loginModal).not.toBeVisible();
});

test('Verify the Login modal contents', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.logInLink.click();
  await expect(casinoPage.loginModal).toBeVisible();
  await expect(casinoPage.loginModalEmailInput).toBeVisible();
  await expect(casinoPage.loginModalPasswordInput).toBeVisible();
  await expect(casinoPage.loginModalForgotPasswordLink).toBeVisible();
  await expect(casinoPage.loginModalLogInButton).toBeVisible();
  await expect(casinoPage.loginModalRegisterLink).toBeVisible();
  await expect(casinoPage.loginModalGoogleButton).toBeVisible();
  await expect(casinoPage.loginModalGoogleFrame.getByText(/^Continue with Google$/)).toBeVisible();
});

test('Open the Sign-up modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.signUpLink.click();
  await expect(casinoPage.signUpModal).toBeVisible();
});

test('Open the Sign-up modal from the Login modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.logInLink.click();
  await casinoPage.loginModalRegisterLink.click();
  await expect(casinoPage.signUpModal).toBeVisible();
});

test('Close the Sign-up modal', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.signUpLink.click();
  await casinoPage.signUpModalCloseButton.click();
  await casinoPage.signUpModalCloseButton.nth(1).click();
  await expect(casinoPage.signUpModal).not.toBeVisible();
});

test('Verify the Sign-up modal contents', { tag: '@Regression' }, async ({ casinoPage }) => {
  await casinoPage.signUpLink.click();
  await expect(casinoPage.signUpModal).toBeVisible();
  await expect(casinoPage.signUpModalGoogleButton).toBeVisible();
  await expect(casinoPage.signUpModalEmailButton).toBeVisible();
  await expect(casinoPage.signUpModalLogInButton).toBeVisible();
  await expect(casinoPage.signUpModalEmailInput).toBeVisible();
  await expect(casinoPage.signUpModalContinueButton).toBeVisible();
  await expect(casinoPage.signUpModalContinueButton).toBeDisabled();
});