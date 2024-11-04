import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Moderator-card.component.html',
  styleUrls: ['./Moderator-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Moderator-card]': 'true'
  }
})

export class ModeratorCardComponent {


}