import type { Locator, Page } from '@playwright/test';

export class CasinoPage {
  protected readonly page: Page;
  readonly acceptCookiesButton: Locator;
  readonly casinoLink: Locator;
  readonly sportsLink: Locator;
  readonly lottoLink: Locator;
  readonly wheelLink: Locator;
  readonly liveDealerLink: Locator;
  readonly promoBlock: Locator;
  readonly closeWheelButton: Locator;
  readonly authenticateAndSpinButton: Locator;
  readonly loginForm: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookiesButton = page.getByRole('button', { name: 'Permite toate' });
    this.casinoLink = page.getByRole('link', { name: 'Cazinou' }).first();
    this.liveDealerLink = page.getByRole('link', { name: 'Live Dealer' }).first();
    this.sportsLink = page.getByRole('link', { name: 'Sporturi' }).first();
    this.lottoLink = page.getByRole('link', { name: 'Loto' }).first();
    this.wheelLink = page.getByRole('link', { name: 'Roată' }).first();
    this.promoBlock = page.getByTestId('stories-promo-block');
    this.closeWheelButton = page.getByTestId('fortune-wheel-widget-close-btn');
    this.authenticateAndSpinButton = page.getByRole('button', { name: 'Autentifică și rotește' });
    this.loginForm = page.getByTestId('login-popup-form');
  }
  
  async goToHome(): Promise<void> {
    await this.page.goto('https://mrbit.ro/ro');
  }

  async acceptCookies(): Promise<void> {
    if (await this.acceptCookiesButton.isVisible()) {
      await this.acceptCookiesButton.click();
    }
  }
}