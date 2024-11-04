import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Achievement-card.component.html',
  styleUrls: ['./Achievement-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Achievement-card]': 'true'
  }
})

export class AchievementCardComponent {


}