import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Move-card.component.html',
  styleUrls: ['./Move-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Move-card]': 'true'
  }
})

export class MoveCardComponent {


}