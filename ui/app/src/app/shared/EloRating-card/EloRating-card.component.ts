import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './EloRating-card.component.html',
  styleUrls: ['./EloRating-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.EloRating-card]': 'true'
  }
})

export class EloRatingCardComponent {


}