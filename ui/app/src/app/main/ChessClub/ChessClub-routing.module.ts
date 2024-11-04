import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessClubHomeComponent } from './home/ChessClub-home.component';
import { ChessClubNewComponent } from './new/ChessClub-new.component';
import { ChessClubDetailComponent } from './detail/ChessClub-detail.component';

const routes: Routes = [
  {path: '', component: ChessClubHomeComponent},
  { path: 'new', component: ChessClubNewComponent },
  { path: ':id', component: ChessClubDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ChessClub-detail-permissions'
      }
    }
  },{
    path: ':club_id/ClubMembership', loadChildren: () => import('../ClubMembership/ClubMembership.module').then(m => m.ClubMembershipModule),
    data: {
        oPermission: {
            permissionId: 'ClubMembership-detail-permissions'
        }
    }
}
];

export const CHESSCLUB_MODULE_DECLARATIONS = [
    ChessClubHomeComponent,
    ChessClubNewComponent,
    ChessClubDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChessClubRoutingModule { }