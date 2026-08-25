import type { Locator, FrameLocator, Page } from '@playwright/test';
import { SignUpModal } from '../1-components/signup-modal.component';
import { LoginModal } from '../1-components/login-modal.component';
import { WheelModal } from '../1-components/wheel-modal.component';

export class BasePage {
  readonly page: Page;
  readonly signUpModal: SignUpModal;
  readonly loginModal: LoginModal;
  readonly wheelModal: WheelModal;
  readonly acceptCookiesButton: Locator;
  readonly casinoLink: Locator;
  readonly liveCasinoLink: Locator;
  readonly sportsLink: Locator;
  readonly lottoLink: Locator;
  readonly wheelLink: Locator;
  readonly storyGroup: Locator;
  readonly logInLink: Locator;
  readonly signUpLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signUpModal = new SignUpModal(page);
    this.loginModal = new LoginModal(page);
    this.wheelModal = new WheelModal(page);
    this.acceptCookiesButton = page.getByRole('button', { name: 'Allow all' });
    this.casinoLink = page.getByRole('link', { name: 'Casino' }).first();
    this.liveCasinoLink = page.getByRole('link', { name: 'Live Casino' }).first();
    this.sportsLink = page.getByRole('link', { name: 'Sports' }).first();
    this.lottoLink = page.getByRole('link', { name: 'Lotto' }).first();
    this.wheelLink = page.getByRole('link', { name: 'Wheel' }).first();
    this.storyGroup = page.getByTestId('stories-promo-block');
    this.logInLink = page.getByRole('link', { name: 'Log in' });    
    this.signUpLink = page.getByRole('link', { name: 'Register' });
  }

  async goToPage(url: string): Promise<void> {
    await this.page.goto(url);
    await this.acceptCookiesButton.click();
  };
}