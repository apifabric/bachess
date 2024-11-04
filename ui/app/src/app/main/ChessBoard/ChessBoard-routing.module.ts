import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessBoardHomeComponent } from './home/ChessBoard-home.component';
import { ChessBoardNewComponent } from './new/ChessBoard-new.component';
import { ChessBoardDetailComponent } from './detail/ChessBoard-detail.component';

const routes: Routes = [
  {path: '', component: ChessBoardHomeComponent},
  { path: 'new', component: ChessBoardNewComponent },
  { path: ':id', component: ChessBoardDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ChessBoard-detail-permissions'
      }
    }
  }
];

export const CHESSBOARD_MODULE_DECLARATIONS = [
    ChessBoardHomeComponent,
    ChessBoardNewComponent,
    ChessBoardDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChessBoardRoutingModule { }