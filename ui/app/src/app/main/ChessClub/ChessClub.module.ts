import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CHESSCLUB_MODULE_DECLARATIONS, ChessClubRoutingModule} from  './ChessClub-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ChessClubRoutingModule
  ],
  declarations: CHESSCLUB_MODULE_DECLARATIONS,
  exports: CHESSCLUB_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChessClubModule { }