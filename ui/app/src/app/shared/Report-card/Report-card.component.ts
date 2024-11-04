import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Report-card.component.html',
  styleUrls: ['./Report-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Report-card]': 'true'
  }
})

export class ReportCardComponent {


}