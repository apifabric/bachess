import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PlayerTeam-card.component.html',
  styleUrls: ['./PlayerTeam-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PlayerTeam-card]': 'true'
  }
})

export class PlayerTeamCardComponent {


}