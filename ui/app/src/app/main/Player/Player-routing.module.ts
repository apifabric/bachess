import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerHomeComponent } from './home/Player-home.component';
import { PlayerNewComponent } from './new/Player-new.component';
import { PlayerDetailComponent } from './detail/Player-detail.component';

const routes: Routes = [
  {path: '', component: PlayerHomeComponent},
  { path: 'new', component: PlayerNewComponent },
  { path: ':id', component: PlayerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Player-detail-permissions'
      }
    }
  },{
    path: ':player_id/Ban', loadChildren: () => import('../Ban/Ban.module').then(m => m.BanModule),
    data: {
        oPermission: {
            permissionId: 'Ban-detail-permissions'
        }
    }
},{
    path: ':player_id/BugReport', loadChildren: () => import('../BugReport/BugReport.module').then(m => m.BugReportModule),
    data: {
        oPermission: {
            permissionId: 'BugReport-detail-permissions'
        }
    }
},{
    path: ':player_id/Chat', loadChildren: () => import('../Chat/Chat.module').then(m => m.ChatModule),
    data: {
        oPermission: {
            permissionId: 'Chat-detail-permissions'
        }
    }
},{
    path: ':player_id/ClubMembership', loadChildren: () => import('../ClubMembership/ClubMembership.module').then(m => m.ClubMembershipModule),
    data: {
        oPermission: {
            permissionId: 'ClubMembership-detail-permissions'
        }
    }
},{
    path: ':player_id/EloRating', loadChildren: () => import('../EloRating/EloRating.module').then(m => m.EloRatingModule),
    data: {
        oPermission: {
            permissionId: 'EloRating-detail-permissions'
        }
    }
},{
    path: ':friend_id/Friend', loadChildren: () => import('../Friend/Friend.module').then(m => m.FriendModule),
    data: {
        oPermission: {
            permissionId: 'Friend-detail-permissions'
        }
    }
},{
    path: ':player_id/Friend', loadChildren: () => import('../Friend/Friend.module').then(m => m.FriendModule),
    data: {
        oPermission: {
            permissionId: 'Friend-detail-permissions'
        }
    }
},{
    path: ':winner_id/GameResult', loadChildren: () => import('../GameResult/GameResult.module').then(m => m.GameResultModule),
    data: {
        oPermission: {
            permissionId: 'GameResult-detail-permissions'
        }
    }
},{
    path: ':player_id/Leaderboard', loadChildren: () => import('../Leaderboard/Leaderboard.module').then(m => m.LeaderboardModule),
    data: {
        oPermission: {
            permissionId: 'Leaderboard-detail-permissions'
        }
    }
},{
    path: ':player_id/Moderator', loadChildren: () => import('../Moderator/Moderator.module').then(m => m.ModeratorModule),
    data: {
        oPermission: {
            permissionId: 'Moderator-detail-permissions'
        }
    }
},{
    path: ':player_id/Move', loadChildren: () => import('../Move/Move.module').then(m => m.MoveModule),
    data: {
        oPermission: {
            permissionId: 'Move-detail-permissions'
        }
    }
},{
    path: ':player_id/Notification', loadChildren: () => import('../Notification/Notification.module').then(m => m.NotificationModule),
    data: {
        oPermission: {
            permissionId: 'Notification-detail-permissions'
        }
    }
},{
    path: ':player_id/Payment', loadChildren: () => import('../Payment/Payment.module').then(m => m.PaymentModule),
    data: {
        oPermission: {
            permissionId: 'Payment-detail-permissions'
        }
    }
},{
    path: ':player_id/PlayerAchievement', loadChildren: () => import('../PlayerAchievement/PlayerAchievement.module').then(m => m.PlayerAchievementModule),
    data: {
        oPermission: {
            permissionId: 'PlayerAchievement-detail-permissions'
        }
    }
},{
    path: ':player_id/PlayerTeam', loadChildren: () => import('../PlayerTeam/PlayerTeam.module').then(m => m.PlayerTeamModule),
    data: {
        oPermission: {
            permissionId: 'PlayerTeam-detail-permissions'
        }
    }
},{
    path: ':player_id/PlayerTournament', loadChildren: () => import('../PlayerTournament/PlayerTournament.module').then(m => m.PlayerTournamentModule),
    data: {
        oPermission: {
            permissionId: 'PlayerTournament-detail-permissions'
        }
    }
},{
    path: ':reported_by_id/Report', loadChildren: () => import('../Report/Report.module').then(m => m.ReportModule),
    data: {
        oPermission: {
            permissionId: 'Report-detail-permissions'
        }
    }
},{
    path: ':reported_player_id/Report', loadChildren: () => import('../Report/Report.module').then(m => m.ReportModule),
    data: {
        oPermission: {
            permissionId: 'Report-detail-permissions'
        }
    }
},{
    path: ':player_id/RuleViolation', loadChildren: () => import('../RuleViolation/RuleViolation.module').then(m => m.RuleViolationModule),
    data: {
        oPermission: {
            permissionId: 'RuleViolation-detail-permissions'
        }
    }
}
];

export const PLAYER_MODULE_DECLARATIONS = [
    PlayerHomeComponent,
    PlayerNewComponent,
    PlayerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }