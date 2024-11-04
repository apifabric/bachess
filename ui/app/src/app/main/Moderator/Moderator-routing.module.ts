import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeratorHomeComponent } from './home/Moderator-home.component';
import { ModeratorNewComponent } from './new/Moderator-new.component';
import { ModeratorDetailComponent } from './detail/Moderator-detail.component';

const routes: Routes = [
  {path: '', component: ModeratorHomeComponent},
  { path: 'new', component: ModeratorNewComponent },
  { path: ':id', component: ModeratorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Moderator-detail-permissions'
      }
    }
  }
];

export const MODERATOR_MODULE_DECLARATIONS = [
    ModeratorHomeComponent,
    ModeratorNewComponent,
    ModeratorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeratorRoutingModule { }