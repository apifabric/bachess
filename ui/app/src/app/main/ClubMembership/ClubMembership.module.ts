import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CLUBMEMBERSHIP_MODULE_DECLARATIONS, ClubMembershipRoutingModule} from  './ClubMembership-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ClubMembershipRoutingModule
  ],
  declarations: CLUBMEMBERSHIP_MODULE_DECLARATIONS,
  exports: CLUBMEMBERSHIP_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClubMembershipModule { }