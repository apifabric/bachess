import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PLAYERACHIEVEMENT_MODULE_DECLARATIONS, PlayerAchievementRoutingModule} from  './PlayerAchievement-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PlayerAchievementRoutingModule
  ],
  declarations: PLAYERACHIEVEMENT_MODULE_DECLARATIONS,
  exports: PLAYERACHIEVEMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayerAchievementModule { }