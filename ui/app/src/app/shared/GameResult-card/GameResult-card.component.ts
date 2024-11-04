import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './GameResult-card.component.html',
  styleUrls: ['./GameResult-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.GameResult-card]': 'true'
  }
})

export class GameResultCardComponent {


}