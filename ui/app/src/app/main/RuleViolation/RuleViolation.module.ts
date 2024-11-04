import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RULEVIOLATION_MODULE_DECLARATIONS, RuleViolationRoutingModule} from  './RuleViolation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    RuleViolationRoutingModule
  ],
  declarations: RULEVIOLATION_MODULE_DECLARATIONS,
  exports: RULEVIOLATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RuleViolationModule { }