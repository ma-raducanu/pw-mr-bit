import { test as base } from '@playwright/test';
import { CasinoPage } from '../1-page-objects/casino-page';

type Pages = {
  casinoPage: CasinoPage;
};

export const test = base.extend<Pages> ({
  casinoPage: async ({ page }, use) => {
    const casinoPage = new CasinoPage(page);
    await use(casinoPage);
  },
});

export { expect } from '@playwright/test';