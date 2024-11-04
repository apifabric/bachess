import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EloRatingHomeComponent } from './home/EloRating-home.component';
import { EloRatingNewComponent } from './new/EloRating-new.component';
import { EloRatingDetailComponent } from './detail/EloRating-detail.component';

const routes: Routes = [
  {path: '', component: EloRatingHomeComponent},
  { path: 'new', component: EloRatingNewComponent },
  { path: ':id', component: EloRatingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'EloRating-detail-permissions'
      }
    }
  }
];

export const ELORATING_MODULE_DECLARATIONS = [
    EloRatingHomeComponent,
    EloRatingNewComponent,
    EloRatingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EloRatingRoutingModule { }