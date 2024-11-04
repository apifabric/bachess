import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ChessBoard-new',
  templateUrl: './ChessBoard-new.component.html',
  styleUrls: ['./ChessBoard-new.component.scss']
})
export class ChessBoardNewComponent {
  @ViewChild("ChessBoardForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}