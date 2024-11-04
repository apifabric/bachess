import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanHomeComponent } from './home/Ban-home.component';
import { BanNewComponent } from './new/Ban-new.component';
import { BanDetailComponent } from './detail/Ban-detail.component';

const routes: Routes = [
  {path: '', component: BanHomeComponent},
  { path: 'new', component: BanNewComponent },
  { path: ':id', component: BanDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Ban-detail-permissions'
      }
    }
  }
];

export const BAN_MODULE_DECLARATIONS = [
    BanHomeComponent,
    BanNewComponent,
    BanDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BanRoutingModule { }