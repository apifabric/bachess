import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ChessBoard-card.component.html',
  styleUrls: ['./ChessBoard-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ChessBoard-card]': 'true'
  }
})

export class ChessBoardCardComponent {


}