import { test as base } from '@playwright/test';
import { CasinoPage } from '../objects/pages/casino.page';
import { LiveCasinoPage } from '../objects/pages/live-casino.page';
import { SportsPage } from '../objects/pages/sports.page';

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