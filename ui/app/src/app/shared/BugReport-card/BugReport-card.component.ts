import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './BugReport-card.component.html',
  styleUrls: ['./BugReport-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.BugReport-card]': 'true'
  }
})

export class BugReportCardComponent {


}