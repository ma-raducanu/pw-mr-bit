import type { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { GameGrid } from '../1-components/game-grid.component';

export class CasinoPage extends BasePage {
  readonly gameGrid: GameGrid;

  constructor(page: Page) {
    super(page);
    this.gameGrid = new GameGrid(page);
  }
}