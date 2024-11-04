import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ClubMembership-new',
  templateUrl: './ClubMembership-new.component.html',
  styleUrls: ['./ClubMembership-new.component.scss']
})
export class ClubMembershipNewComponent {
  @ViewChild("ClubMembershipForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}