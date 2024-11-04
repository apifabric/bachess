import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerAchievementHomeComponent } from './home/PlayerAchievement-home.component';
import { PlayerAchievementNewComponent } from './new/PlayerAchievement-new.component';
import { PlayerAchievementDetailComponent } from './detail/PlayerAchievement-detail.component';

const routes: Routes = [
  {path: '', component: PlayerAchievementHomeComponent},
  { path: 'new', component: PlayerAchievementNewComponent },
  { path: ':id', component: PlayerAchievementDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PlayerAchievement-detail-permissions'
      }
    }
  }
];

export const PLAYERACHIEVEMENT_MODULE_DECLARATIONS = [
    PlayerAchievementHomeComponent,
    PlayerAchievementNewComponent,
    PlayerAchievementDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerAchievementRoutingModule { }