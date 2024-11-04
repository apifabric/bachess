import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Chat-card.component.html',
  styleUrls: ['./Chat-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Chat-card]': 'true'
  }
})

export class ChatCardComponent {


}