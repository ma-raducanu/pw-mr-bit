import { test as base } from '@playwright/test';
import { CasinoPage } from '../1-objects/0-pages/casino.page';
import { LiveCasinoPage } from '../1-objects/0-pages/live-casino.page';
import { SportsPage } from '../1-objects/0-pages/sports.page';

type Pages = {
  casinoPage: CasinoPage;
  liveCasinoPage: LiveCasinoPage;
  sportsPage: SportsPage;
};

export const test = base.extend<Pages> ({
  casinoPage: async ({ page }, use) => await use(new CasinoPage(page)),
  liveCasinoPage: async ({ page }, use) => await use(new LiveCasinoPage(page)),
  sportsPage: async ({ page }, use) => await use(new SportsPage(page)),
});

export { expect } from '@playwright/test';