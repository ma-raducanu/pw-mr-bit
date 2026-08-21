import { type Locator, type Page, expect } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;
  readonly acceptCookiesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookiesButton = page.getByRole('button', { name: 'Allow all' });
  }

  async goToHome(): Promise<void> {
    await this.page.goto('https://mrbit.ro/en');
  };

  async acceptCookies(): Promise<void> {
    if (await this.acceptCookiesButton.isVisible()) {
      await this.acceptCookiesButton.click();
    }
  }

  async expectUrl(url: string): Promise<void> {
    await expect(this.page).toHaveURL(url);
  }
}