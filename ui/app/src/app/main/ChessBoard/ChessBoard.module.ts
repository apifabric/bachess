import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CHESSBOARD_MODULE_DECLARATIONS, ChessBoardRoutingModule} from  './ChessBoard-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ChessBoardRoutingModule
  ],
  declarations: CHESSBOARD_MODULE_DECLARATIONS,
  exports: CHESSBOARD_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChessBoardModule { }