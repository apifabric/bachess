import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubMembershipHomeComponent } from './home/ClubMembership-home.component';
import { ClubMembershipNewComponent } from './new/ClubMembership-new.component';
import { ClubMembershipDetailComponent } from './detail/ClubMembership-detail.component';

const routes: Routes = [
  {path: '', component: ClubMembershipHomeComponent},
  { path: 'new', component: ClubMembershipNewComponent },
  { path: ':id', component: ClubMembershipDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ClubMembership-detail-permissions'
      }
    }
  }
];

export const CLUBMEMBERSHIP_MODULE_DECLARATIONS = [
    ClubMembershipHomeComponent,
    ClubMembershipNewComponent,
    ClubMembershipDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubMembershipRoutingModule { }