import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Achievement', loadChildren: () => import('./Achievement/Achievement.module').then(m => m.AchievementModule) },
    
        { path: 'Ban', loadChildren: () => import('./Ban/Ban.module').then(m => m.BanModule) },
    
        { path: 'BugReport', loadChildren: () => import('./BugReport/BugReport.module').then(m => m.BugReportModule) },
    
        { path: 'Chat', loadChildren: () => import('./Chat/Chat.module').then(m => m.ChatModule) },
    
        { path: 'ChessBoard', loadChildren: () => import('./ChessBoard/ChessBoard.module').then(m => m.ChessBoardModule) },
    
        { path: 'ChessClub', loadChildren: () => import('./ChessClub/ChessClub.module').then(m => m.ChessClubModule) },
    
        { path: 'ClubMembership', loadChildren: () => import('./ClubMembership/ClubMembership.module').then(m => m.ClubMembershipModule) },
    
        { path: 'EloRating', loadChildren: () => import('./EloRating/EloRating.module').then(m => m.EloRatingModule) },
    
        { path: 'Friend', loadChildren: () => import('./Friend/Friend.module').then(m => m.FriendModule) },
    
        { path: 'Game', loadChildren: () => import('./Game/Game.module').then(m => m.GameModule) },
    
        { path: 'GameResult', loadChildren: () => import('./GameResult/GameResult.module').then(m => m.GameResultModule) },
    
        { path: 'Leaderboard', loadChildren: () => import('./Leaderboard/Leaderboard.module').then(m => m.LeaderboardModule) },
    
        { path: 'Moderator', loadChildren: () => import('./Moderator/Moderator.module').then(m => m.ModeratorModule) },
    
        { path: 'Move', loadChildren: () => import('./Move/Move.module').then(m => m.MoveModule) },
    
        { path: 'Notification', loadChildren: () => import('./Notification/Notification.module').then(m => m.NotificationModule) },
    
        { path: 'Payment', loadChildren: () => import('./Payment/Payment.module').then(m => m.PaymentModule) },
    
        { path: 'Player', loadChildren: () => import('./Player/Player.module').then(m => m.PlayerModule) },
    
        { path: 'PlayerAchievement', loadChildren: () => import('./PlayerAchievement/PlayerAchievement.module').then(m => m.PlayerAchievementModule) },
    
        { path: 'PlayerTeam', loadChildren: () => import('./PlayerTeam/PlayerTeam.module').then(m => m.PlayerTeamModule) },
    
        { path: 'PlayerTournament', loadChildren: () => import('./PlayerTournament/PlayerTournament.module').then(m => m.PlayerTournamentModule) },
    
        { path: 'Report', loadChildren: () => import('./Report/Report.module').then(m => m.ReportModule) },
    
        { path: 'RuleViolation', loadChildren: () => import('./RuleViolation/RuleViolation.module').then(m => m.RuleViolationModule) },
    
        { path: 'Team', loadChildren: () => import('./Team/Team.module').then(m => m.TeamModule) },
    
        { path: 'Tournament', loadChildren: () => import('./Tournament/Tournament.module').then(m => m.TournamentModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }