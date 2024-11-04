import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './RuleViolation-card.component.html',
  styleUrls: ['./RuleViolation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.RuleViolation-card]': 'true'
  }
})

export class RuleViolationCardComponent {


}