import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ELORATING_MODULE_DECLARATIONS, EloRatingRoutingModule} from  './EloRating-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    EloRatingRoutingModule
  ],
  declarations: ELORATING_MODULE_DECLARATIONS,
  exports: ELORATING_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EloRatingModule { }