import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ClubMembership-card.component.html',
  styleUrls: ['./ClubMembership-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ClubMembership-card]': 'true'
  }
})

export class ClubMembershipCardComponent {


}