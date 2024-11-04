import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PlayerTournament-card.component.html',
  styleUrls: ['./PlayerTournament-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PlayerTournament-card]': 'true'
  }
})

export class PlayerTournamentCardComponent {


}