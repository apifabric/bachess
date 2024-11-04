import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameResultHomeComponent } from './home/GameResult-home.component';
import { GameResultNewComponent } from './new/GameResult-new.component';
import { GameResultDetailComponent } from './detail/GameResult-detail.component';

const routes: Routes = [
  {path: '', component: GameResultHomeComponent},
  { path: 'new', component: GameResultNewComponent },
  { path: ':id', component: GameResultDetailComponent,
    data: {
      oPermission: {
        permissionId: 'GameResult-detail-permissions'
      }
    }
  }
];

export const GAMERESULT_MODULE_DECLARATIONS = [
    GameResultHomeComponent,
    GameResultNewComponent,
    GameResultDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameResultRoutingModule { }