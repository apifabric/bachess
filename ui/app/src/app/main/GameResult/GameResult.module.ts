import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {GAMERESULT_MODULE_DECLARATIONS, GameResultRoutingModule} from  './GameResult-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    GameResultRoutingModule
  ],
  declarations: GAMERESULT_MODULE_DECLARATIONS,
  exports: GAMERESULT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GameResultModule { }