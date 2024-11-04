import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PLAYERTOURNAMENT_MODULE_DECLARATIONS, PlayerTournamentRoutingModule} from  './PlayerTournament-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PlayerTournamentRoutingModule
  ],
  declarations: PLAYERTOURNAMENT_MODULE_DECLARATIONS,
  exports: PLAYERTOURNAMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayerTournamentModule { }