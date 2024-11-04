import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MODERATOR_MODULE_DECLARATIONS, ModeratorRoutingModule} from  './Moderator-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ModeratorRoutingModule
  ],
  declarations: MODERATOR_MODULE_DECLARATIONS,
  exports: MODERATOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModeratorModule { }