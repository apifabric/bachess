import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatHomeComponent } from './home/Chat-home.component';
import { ChatNewComponent } from './new/Chat-new.component';
import { ChatDetailComponent } from './detail/Chat-detail.component';

const routes: Routes = [
  {path: '', component: ChatHomeComponent},
  { path: 'new', component: ChatNewComponent },
  { path: ':id', component: ChatDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Chat-detail-permissions'
      }
    }
  }
];

export const CHAT_MODULE_DECLARATIONS = [
    ChatHomeComponent,
    ChatNewComponent,
    ChatDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }