import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoveHomeComponent } from './home/Move-home.component';
import { MoveNewComponent } from './new/Move-new.component';
import { MoveDetailComponent } from './detail/Move-detail.component';

const routes: Routes = [
  {path: '', component: MoveHomeComponent},
  { path: 'new', component: MoveNewComponent },
  { path: ':id', component: MoveDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Move-detail-permissions'
      }
    }
  }
];

export const MOVE_MODULE_DECLARATIONS = [
    MoveHomeComponent,
    MoveNewComponent,
    MoveDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoveRoutingModule { }