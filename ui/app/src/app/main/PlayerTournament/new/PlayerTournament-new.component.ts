import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PlayerTournament-new',
  templateUrl: './PlayerTournament-new.component.html',
  styleUrls: ['./PlayerTournament-new.component.scss']
})
export class PlayerTournamentNewComponent {
  @ViewChild("PlayerTournamentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}