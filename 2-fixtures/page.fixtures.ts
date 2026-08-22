import { test as base } from '@playwright/test';
import { CasinoPage } from '../1-page-objects/casino.page';
import { LiveCasinoPage } from '../1-page-objects/live-casino.page';
import { SportsPage } from '../1-page-objects/sports.page';

type Pages = {
  casinoPage: CasinoPage;
  liveCasinoPage: LiveCasinoPage;
  sportsPage: SportsPage;
};

export const test = base.extend<Pages> ({
  casinoPage: async ({ page }, use) => {
    const casinoPage = new CasinoPage(page);
    await use(casinoPage);
  },
  liveCasinoPage: async ({ page }, use) => {
    const liveCasinoPage = new LiveCasinoPage(page);
    await use(liveCasinoPage);
  },
  sportsPage: async ({ page }, use) => {
    const sportsPage = new SportsPage(page);
    await use(sportsPage);
  },
});

export { expect } from '@playwright/test';