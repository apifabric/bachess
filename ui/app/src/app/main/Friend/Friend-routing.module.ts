import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendHomeComponent } from './home/Friend-home.component';
import { FriendNewComponent } from './new/Friend-new.component';
import { FriendDetailComponent } from './detail/Friend-detail.component';

const routes: Routes = [
  {path: '', component: FriendHomeComponent},
  { path: 'new', component: FriendNewComponent },
  { path: ':id', component: FriendDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Friend-detail-permissions'
      }
    }
  }
];

export const FRIEND_MODULE_DECLARATIONS = [
    FriendHomeComponent,
    FriendNewComponent,
    FriendDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendRoutingModule { }