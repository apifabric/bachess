import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Friend-card.component.html',
  styleUrls: ['./Friend-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Friend-card]': 'true'
  }
})

export class FriendCardComponent {


}