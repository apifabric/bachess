import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PLAYERTEAM_MODULE_DECLARATIONS, PlayerTeamRoutingModule} from  './PlayerTeam-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PlayerTeamRoutingModule
  ],
  declarations: PLAYERTEAM_MODULE_DECLARATIONS,
  exports: PLAYERTEAM_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayerTeamModule { }