import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {BUGREPORT_MODULE_DECLARATIONS, BugReportRoutingModule} from  './BugReport-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    BugReportRoutingModule
  ],
  declarations: BUGREPORT_MODULE_DECLARATIONS,
  exports: BUGREPORT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BugReportModule { }