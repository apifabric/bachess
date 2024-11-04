import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Achievement-new',
  templateUrl: './Achievement-new.component.html',
  styleUrls: ['./Achievement-new.component.scss']
})
export class AchievementNewComponent {
  @ViewChild("AchievementForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}