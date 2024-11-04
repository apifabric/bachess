import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ChessClub-card.component.html',
  styleUrls: ['./ChessClub-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ChessClub-card]': 'true'
  }
})

export class ChessClubCardComponent {


}