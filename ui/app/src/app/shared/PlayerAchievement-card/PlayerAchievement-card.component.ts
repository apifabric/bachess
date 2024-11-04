import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PlayerAchievement-card.component.html',
  styleUrls: ['./PlayerAchievement-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PlayerAchievement-card]': 'true'
  }
})

export class PlayerAchievementCardComponent {


}