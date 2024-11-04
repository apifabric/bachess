import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Ban-card.component.html',
  styleUrls: ['./Ban-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Ban-card]': 'true'
  }
})

export class BanCardComponent {


}