import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';
import { GameGrid } from '../1-components/game-grid.component';
import { AboutDemoModal } from '../1-components/about-demo-modal.component';

export class LiveCasinoPage extends BasePage {
  readonly gameGrid: GameGrid;
  readonly aboutDemoModal: AboutDemoModal;

  constructor(page: Page) {
    super(page);
    this.gameGrid = new GameGrid(page);
    this.aboutDemoModal = new AboutDemoModal(page);
  }

  async goToLiveCasinoPage(): Promise<void> {
    await this.goToPage('https://mrbit.ro/en/games/live');
  }
}