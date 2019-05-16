import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { Card } from '../card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  cards: Card[];
  constructor(public gameService: GameService) {
    this.cards = this.gameService.gameCards;
    this.gameService.startTimer();
  }
  ngOnDestroy(): void {
    this.gameService.stopTimer();
  }



}
