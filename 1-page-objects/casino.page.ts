import type { Locator, FrameLocator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class CasinoPage extends BasePage {
  readonly casinoLink: Locator;
  readonly liveCasinoLink: Locator;
  readonly sportsLink: Locator;
  readonly lottoLink: Locator;
  readonly wheelLink: Locator;
  readonly storyGroup: Locator;
  readonly wheelModal: Locator;
  readonly wheelModalLogInAndSpinButton: Locator;
  readonly wheelModalCloseButton: Locator;
  readonly logInLink: Locator;
  readonly loginModal: Locator;
  readonly loginModalEmailInput: Locator;
  readonly loginModalPasswordInput: Locator;
  readonly loginModalForgotPasswordLink: Locator;
  readonly loginModalLogInButton: Locator;
  readonly loginModalRegisterLink: Locator;
  readonly loginModalGoogleButton: Locator;
  readonly loginModalGoogleFrame: FrameLocator;
  readonly loginModalCloseButton: Locator;
  readonly signUpLink: Locator;
  readonly signUpModal: Locator;
  readonly signUpModalGoogleButton: Locator;
  readonly signUpModalEmailButton: Locator;
  readonly signUpModalLogInButton: Locator;
  readonly signUpModalEmailInput: Locator;
  readonly signUpModalContinueButton: Locator;
  readonly signUpModalCloseButton: Locator;
  readonly menuDropdown: Locator;
  readonly newGamesLink: Locator;

  constructor(page: Page) {
    super(page);
    this.casinoLink = page.getByRole('link', { name: 'Casino' }).first();
    this.liveCasinoLink = page.getByRole('link', { name: 'Live Casino' }).first();
    this.sportsLink = page.getByRole('link', { name: 'Sports' }).first();
    this.lottoLink = page.getByRole('link', { name: 'Lotto' }).first();
    this.wheelLink = page.getByRole('link', { name: 'Wheel' }).first();
    this.storyGroup = page.getByTestId('stories-promo-block');
    this.wheelModal = page.getByTestId('fortune-wheel-widget-container');
    this.wheelModalLogInAndSpinButton = page.getByRole('button', { name: 'Log in and spin' });
    this.wheelModalCloseButton = page.getByTestId('fortune-wheel-widget-close-btn');
    this.logInLink = page.getByRole('link', { name: 'Log in' });    
    this.loginModal = page.getByTestId('login-popup-form');
    this.loginModalEmailInput = page.getByTestId('login-popup-form-input-name');
    this.loginModalPasswordInput = page.getByTestId('login-popup-form-input-password');
    this.loginModalForgotPasswordLink = page.locator('.login-popup__forgot-password', { hasText: 'Forgot password?' });
    this.loginModalLogInButton = page.getByRole('button', { name: 'Log in' });
    this.loginModalRegisterLink = page.locator('.login-popup__register-link', {hasText: 'Register'});
    this.loginModalGoogleButton = page.locator('div[class*="GoogleButton"][class*="button"]');
    this.loginModalGoogleFrame = page.frameLocator('iframe[title="Sign in with Google Button"]');
    this.loginModalCloseButton = page.getByTestId('login-popup-close');
    this.signUpLink = page.getByRole('link', { name: 'Register' });
    this.signUpModal = page.locator('div.signup-widget-popup');
    this.signUpModalGoogleButton = page.getByRole('button', { name: 'Sign up with Google' });
    this.signUpModalEmailButton = page.getByRole('button', { name: 'Sign up with Email' });
    this.signUpModalLogInButton = page.getByRole('button', { name: 'Log in here' });
    this.signUpModalEmailInput = page.locator('input[name="email"]');
    this.signUpModalContinueButton = page.getByRole('button', { name: 'Continue' });
    this.signUpModalCloseButton = page.getByTestId('signup-widget-close-btn');
    this.menuDropdown = page.locator('div.responsive-menu__dropdown');
    this.newGamesLink = page.getByRole('link', { name: 'New' });
  }
}