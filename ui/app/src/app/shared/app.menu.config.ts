import { MenuRootItem } from 'ontimize-web-ngx';

import { AchievementCardComponent } from './Achievement-card/Achievement-card.component';

import { BanCardComponent } from './Ban-card/Ban-card.component';

import { BugReportCardComponent } from './BugReport-card/BugReport-card.component';

import { ChatCardComponent } from './Chat-card/Chat-card.component';

import { ChessBoardCardComponent } from './ChessBoard-card/ChessBoard-card.component';

import { ChessClubCardComponent } from './ChessClub-card/ChessClub-card.component';

import { ClubMembershipCardComponent } from './ClubMembership-card/ClubMembership-card.component';

import { EloRatingCardComponent } from './EloRating-card/EloRating-card.component';

import { FriendCardComponent } from './Friend-card/Friend-card.component';

import { GameCardComponent } from './Game-card/Game-card.component';

import { GameResultCardComponent } from './GameResult-card/GameResult-card.component';

import { LeaderboardCardComponent } from './Leaderboard-card/Leaderboard-card.component';

import { ModeratorCardComponent } from './Moderator-card/Moderator-card.component';

import { MoveCardComponent } from './Move-card/Move-card.component';

import { NotificationCardComponent } from './Notification-card/Notification-card.component';

import { PaymentCardComponent } from './Payment-card/Payment-card.component';

import { PlayerCardComponent } from './Player-card/Player-card.component';

import { PlayerAchievementCardComponent } from './PlayerAchievement-card/PlayerAchievement-card.component';

import { PlayerTeamCardComponent } from './PlayerTeam-card/PlayerTeam-card.component';

import { PlayerTournamentCardComponent } from './PlayerTournament-card/PlayerTournament-card.component';

import { ReportCardComponent } from './Report-card/Report-card.component';

import { RuleViolationCardComponent } from './RuleViolation-card/RuleViolation-card.component';

import { TeamCardComponent } from './Team-card/Team-card.component';

import { TournamentCardComponent } from './Tournament-card/Tournament-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Achievement', name: 'ACHIEVEMENT', icon: 'view_list', route: '/main/Achievement' }
    
        ,{ id: 'Ban', name: 'BAN', icon: 'view_list', route: '/main/Ban' }
    
        ,{ id: 'BugReport', name: 'BUGREPORT', icon: 'view_list', route: '/main/BugReport' }
    
        ,{ id: 'Chat', name: 'CHAT', icon: 'view_list', route: '/main/Chat' }
    
        ,{ id: 'ChessBoard', name: 'CHESSBOARD', icon: 'view_list', route: '/main/ChessBoard' }
    
        ,{ id: 'ChessClub', name: 'CHESSCLUB', icon: 'view_list', route: '/main/ChessClub' }
    
        ,{ id: 'ClubMembership', name: 'CLUBMEMBERSHIP', icon: 'view_list', route: '/main/ClubMembership' }
    
        ,{ id: 'EloRating', name: 'ELORATING', icon: 'view_list', route: '/main/EloRating' }
    
        ,{ id: 'Friend', name: 'FRIEND', icon: 'view_list', route: '/main/Friend' }
    
        ,{ id: 'Game', name: 'GAME', icon: 'view_list', route: '/main/Game' }
    
        ,{ id: 'GameResult', name: 'GAMERESULT', icon: 'view_list', route: '/main/GameResult' }
    
        ,{ id: 'Leaderboard', name: 'LEADERBOARD', icon: 'view_list', route: '/main/Leaderboard' }
    
        ,{ id: 'Moderator', name: 'MODERATOR', icon: 'view_list', route: '/main/Moderator' }
    
        ,{ id: 'Move', name: 'MOVE', icon: 'view_list', route: '/main/Move' }
    
        ,{ id: 'Notification', name: 'NOTIFICATION', icon: 'view_list', route: '/main/Notification' }
    
        ,{ id: 'Payment', name: 'PAYMENT', icon: 'view_list', route: '/main/Payment' }
    
        ,{ id: 'Player', name: 'PLAYER', icon: 'view_list', route: '/main/Player' }
    
        ,{ id: 'PlayerAchievement', name: 'PLAYERACHIEVEMENT', icon: 'view_list', route: '/main/PlayerAchievement' }
    
        ,{ id: 'PlayerTeam', name: 'PLAYERTEAM', icon: 'view_list', route: '/main/PlayerTeam' }
    
        ,{ id: 'PlayerTournament', name: 'PLAYERTOURNAMENT', icon: 'view_list', route: '/main/PlayerTournament' }
    
        ,{ id: 'Report', name: 'REPORT', icon: 'view_list', route: '/main/Report' }
    
        ,{ id: 'RuleViolation', name: 'RULEVIOLATION', icon: 'view_list', route: '/main/RuleViolation' }
    
        ,{ id: 'Team', name: 'TEAM', icon: 'view_list', route: '/main/Team' }
    
        ,{ id: 'Tournament', name: 'TOURNAMENT', icon: 'view_list', route: '/main/Tournament' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AchievementCardComponent

    ,BanCardComponent

    ,BugReportCardComponent

    ,ChatCardComponent

    ,ChessBoardCardComponent

    ,ChessClubCardComponent

    ,ClubMembershipCardComponent

    ,EloRatingCardComponent

    ,FriendCardComponent

    ,GameCardComponent

    ,GameResultCardComponent

    ,LeaderboardCardComponent

    ,ModeratorCardComponent

    ,MoveCardComponent

    ,NotificationCardComponent

    ,PaymentCardComponent

    ,PlayerCardComponent

    ,PlayerAchievementCardComponent

    ,PlayerTeamCardComponent

    ,PlayerTournamentCardComponent

    ,ReportCardComponent

    ,RuleViolationCardComponent

    ,TeamCardComponent

    ,TournamentCardComponent

];