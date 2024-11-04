import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameHomeComponent } from './home/Game-home.component';
import { GameNewComponent } from './new/Game-new.component';
import { GameDetailComponent } from './detail/Game-detail.component';

const routes: Routes = [
  {path: '', component: GameHomeComponent},
  { path: 'new', component: GameNewComponent },
  { path: ':id', component: GameDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Game-detail-permissions'
      }
    }
  },{
    path: ':game_id/Chat', loadChildren: () => import('../Chat/Chat.module').then(m => m.ChatModule),
    data: {
        oPermission: {
            permissionId: 'Chat-detail-permissions'
        }
    }
},{
    path: ':game_id/ChessBoard', loadChildren: () => import('../ChessBoard/ChessBoard.module').then(m => m.ChessBoardModule),
    data: {
        oPermission: {
            permissionId: 'ChessBoard-detail-permissions'
        }
    }
},{
    path: ':game_id/GameResult', loadChildren: () => import('../GameResult/GameResult.module').then(m => m.GameResultModule),
    data: {
        oPermission: {
            permissionId: 'GameResult-detail-permissions'
        }
    }
},{
    path: ':game_id/Move', loadChildren: () => import('../Move/Move.module').then(m => m.MoveModule),
    data: {
        oPermission: {
            permissionId: 'Move-detail-permissions'
        }
    }
}
];

export const GAME_MODULE_DECLARATIONS = [
    GameHomeComponent,
    GameNewComponent,
    GameDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }