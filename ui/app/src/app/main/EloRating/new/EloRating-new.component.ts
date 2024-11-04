import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'EloRating-new',
  templateUrl: './EloRating-new.component.html',
  styleUrls: ['./EloRating-new.component.scss']
})
export class EloRatingNewComponent {
  @ViewChild("EloRatingForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}