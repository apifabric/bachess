import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementHomeComponent } from './home/Achievement-home.component';
import { AchievementNewComponent } from './new/Achievement-new.component';
import { AchievementDetailComponent } from './detail/Achievement-detail.component';

const routes: Routes = [
  {path: '', component: AchievementHomeComponent},
  { path: 'new', component: AchievementNewComponent },
  { path: ':id', component: AchievementDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Achievement-detail-permissions'
      }
    }
  },{
    path: ':achievement_id/PlayerAchievement', loadChildren: () => import('../PlayerAchievement/PlayerAchievement.module').then(m => m.PlayerAchievementModule),
    data: {
        oPermission: {
            permissionId: 'PlayerAchievement-detail-permissions'
        }
    }
}
];

export const ACHIEVEMENT_MODULE_DECLARATIONS = [
    AchievementHomeComponent,
    AchievementNewComponent,
    AchievementDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchievementRoutingModule { }