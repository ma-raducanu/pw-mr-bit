import type { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { GameGrid } from '../components/game-grid.component';
import { AboutDemoModal } from '../components/about-demo-modal.component';

export class LiveCasinoPage extends BasePage {
  readonly gameGrid: GameGrid;
  readonly aboutDemoModal: AboutDemoModal;

  constructor(page: Page) {
    super(page);
    this.gameGrid = new GameGrid(page);
    this.aboutDemoModal = new AboutDemoModal(page);
  }
}