import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'BugReport-new',
  templateUrl: './BugReport-new.component.html',
  styleUrls: ['./BugReport-new.component.scss']
})
export class BugReportNewComponent {
  @ViewChild("BugReportForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}