import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Friend-new',
  templateUrl: './Friend-new.component.html',
  styleUrls: ['./Friend-new.component.scss']
})
export class FriendNewComponent {
  @ViewChild("FriendForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}