import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerTeamHomeComponent } from './home/PlayerTeam-home.component';
import { PlayerTeamNewComponent } from './new/PlayerTeam-new.component';
import { PlayerTeamDetailComponent } from './detail/PlayerTeam-detail.component';

const routes: Routes = [
  {path: '', component: PlayerTeamHomeComponent},
  { path: 'new', component: PlayerTeamNewComponent },
  { path: ':id', component: PlayerTeamDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PlayerTeam-detail-permissions'
      }
    }
  }
];

export const PLAYERTEAM_MODULE_DECLARATIONS = [
    PlayerTeamHomeComponent,
    PlayerTeamNewComponent,
    PlayerTeamDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerTeamRoutingModule { }