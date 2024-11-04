import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerTournamentHomeComponent } from './home/PlayerTournament-home.component';
import { PlayerTournamentNewComponent } from './new/PlayerTournament-new.component';
import { PlayerTournamentDetailComponent } from './detail/PlayerTournament-detail.component';

const routes: Routes = [
  {path: '', component: PlayerTournamentHomeComponent},
  { path: 'new', component: PlayerTournamentNewComponent },
  { path: ':id', component: PlayerTournamentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PlayerTournament-detail-permissions'
      }
    }
  }
];

export const PLAYERTOURNAMENT_MODULE_DECLARATIONS = [
    PlayerTournamentHomeComponent,
    PlayerTournamentNewComponent,
    PlayerTournamentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerTournamentRoutingModule { }