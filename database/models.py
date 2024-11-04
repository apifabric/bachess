# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 04, 2024 07:44:17
# Database: sqlite:////tmp/tmp.uvU1G8nVJh/bachess/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Achievement(SAFRSBaseX, Base):
    """
    description: Describes achievements that can be unlocked by players.
    """
    __tablename__ = 'achievement'
    _s_collection_name = 'Achievement'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    PlayerAchievementList : Mapped[List["PlayerAchievement"]] = relationship(back_populates="achievement")



class ChessClub(SAFRSBaseX, Base):
    """
    description: Represents chess clubs players can join.
    """
    __tablename__ = 'chess_club'
    _s_collection_name = 'ChessClub'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    location = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ClubMembershipList : Mapped[List["ClubMembership"]] = relationship(back_populates="club")



class Game(SAFRSBaseX, Base):
    """
    description: Stores information about a chess game.
    """
    __tablename__ = 'game'
    _s_collection_name = 'Game'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    start_time = Column(DateTime)
    is_completed = Column(Boolean)

    # parent relationships (access parent)

    # child relationships (access children)
    ChatList : Mapped[List["Chat"]] = relationship(back_populates="game")
    ChessBoardList : Mapped[List["ChessBoard"]] = relationship(back_populates="game")
    GameResultList : Mapped[List["GameResult"]] = relationship(back_populates="game")
    MoveList : Mapped[List["Move"]] = relationship(back_populates="game")



class Player(SAFRSBaseX, Base):
    """
    description: Represents a player participating in the chess platform.
    """
    __tablename__ = 'player'
    _s_collection_name = 'Player'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True)
    email = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    BanList : Mapped[List["Ban"]] = relationship(back_populates="player")
    BugReportList : Mapped[List["BugReport"]] = relationship(back_populates="player")
    ChatList : Mapped[List["Chat"]] = relationship(back_populates="player")
    ClubMembershipList : Mapped[List["ClubMembership"]] = relationship(back_populates="player")
    EloRatingList : Mapped[List["EloRating"]] = relationship(back_populates="player")
    FriendList : Mapped[List["Friend"]] = relationship(foreign_keys='[Friend.friend_id]', back_populates="friend")
    FriendList : Mapped[List["Friend"]] = relationship(foreign_keys='[Friend.player_id]', back_populates="player")
    GameResultList : Mapped[List["GameResult"]] = relationship(back_populates="winner")
    LeaderboardList : Mapped[List["Leaderboard"]] = relationship(back_populates="player")
    ModeratorList : Mapped[List["Moderator"]] = relationship(back_populates="player")
    MoveList : Mapped[List["Move"]] = relationship(back_populates="player")
    NotificationList : Mapped[List["Notification"]] = relationship(back_populates="player")
    PaymentList : Mapped[List["Payment"]] = relationship(back_populates="player")
    PlayerAchievementList : Mapped[List["PlayerAchievement"]] = relationship(back_populates="player")
    PlayerTeamList : Mapped[List["PlayerTeam"]] = relationship(back_populates="player")
    PlayerTournamentList : Mapped[List["PlayerTournament"]] = relationship(back_populates="player")
    ReportList : Mapped[List["Report"]] = relationship(foreign_keys='[Report.reported_by_id]', back_populates="reported_by")
    reportedReportList : Mapped[List["Report"]] = relationship(foreign_keys='[Report.reported_player_id]', back_populates="reported_player")
    RuleViolationList : Mapped[List["RuleViolation"]] = relationship(back_populates="player")



class Team(SAFRSBaseX, Base):
    """
    description: Represents teams in collaborative chess games.
    """
    __tablename__ = 'team'
    _s_collection_name = 'Team'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    PlayerTeamList : Mapped[List["PlayerTeam"]] = relationship(back_populates="team")



class Tournament(SAFRSBaseX, Base):
    """
    description: Information regarding chess tournaments.
    """
    __tablename__ = 'tournament'
    _s_collection_name = 'Tournament'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    start_date = Column(DateTime)
    end_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    PlayerTournamentList : Mapped[List["PlayerTournament"]] = relationship(back_populates="tournament")



class Ban(SAFRSBaseX, Base):
    """
    description: Contains ban records imposed on players.
    """
    __tablename__ = 'ban'
    _s_collection_name = 'Ban'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player_id = Column(ForeignKey('player.id'))
    start_date = Column(DateTime)
    end_date = Column(DateTime)

    # parent relationships (access parent)
    player : Mapped["Player"] = relationship(back_populates=("BanList"))

    # child relationships (access children)



class BugReport(SAFRSBaseX, Base):
    """
    description: Stores bug reports submitted by players.
    """
    __tablename__ = 'bug_report'
    _s_collection_name = 'BugReport'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player_id = Column(ForeignKey('player.id'))
    description = Column(String)

    # parent relationships (access parent)
    player : Mapped["Player"] = relationship(back_populates=("BugReportList"))

    # child relationships (access children)



class Chat(SAFRSBaseX, Base):
    """
    description: Contains chat messages exchanged during a game.
    """
    __tablename__ = 'chat'
    _s_collection_name = 'Chat'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    game_id = Column(ForeignKey('game.id'))
    player_id = Column(ForeignKey('player.id'))
    message = Column(String)
    timestamp = Column(DateTime)

    # parent relationships (access parent)
    game : Mapped["Game"] = relationship(back_populates=("ChatList"))
    player : Mapped["Player"] = relationship(back_populates=("ChatList"))

    # child relationships (access children)



class ChessBoard(SAFRSBaseX, Base):
    """
    description: Represents the initial state and setup of a chess game board.
    """
    __tablename__ = 'chess_board'
    _s_collection_name = 'ChessBoard'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    game_id = Column(ForeignKey('game.id'))
    board_state = Column(String)

    # parent relationships (access parent)
    game : Mapped["Game"] = relationship(back_populates=("ChessBoardList"))

    # child relationships (access children)



class ClubMembership(SAFRSBaseX, Base):
    """
    description: Connects players with the chess clubs they are part of.
    """
    __tablename__ = 'club_membership'
    _s_collection_name = 'ClubMembership'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player_id = Column(ForeignKey('player.id'))
    club_id = Column(ForeignKey('chess_club.id'))

    # parent relationships (access parent)
    club : Mapped["ChessClub"] = relationship(back_populates=("ClubMembershipList"))
    player : Mapped["Player"] = relationship(back_populates=("ClubMembershipList"))

    # child relationships (access children)



class EloRating(SAFRSBaseX, Base):
    """
    description: Tracks the Elo ratings of players.
    """
    __tablename__ = 'elo_rating'
    _s_collection_name = 'EloRating'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player_id = Column(ForeignKey('player.id'))
    rating = Column(Integer)

    # parent relationships (access parent)
    player : Mapped["Player"] = relationship(back_populates=("EloRatingList"))

    # child relationships (access children)



class Friend(SAFRSBaseX, Base):
    """
    description: Represents friend relations between players.
    """
    __tablename__ = 'friends'
    _s_collection_name = 'Friend'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player_id = Column(ForeignKey('player.id'))
    friend_id = Column(ForeignKey('player.id'))

    # parent relationships (access parent)
    friend : Mapped["Player"] = relationship(foreign_keys='[Friend.friend_id]', back_populates=("FriendList"))
    player : Mapped["Player"] = relationship(foreign_keys='[Friend.player_id]', back_populates=("FriendList"))

    # child relationships (access children)



class GameResult(SAFRSBaseX, Base):
    """
    description: Stores the results of completed games.
    """
    __tablename__ = 'game_result'
    _s_collection_name = 'GameResult'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    game_id = Column(ForeignKey('game.id'))
    winner_id = Column(ForeignKey('player.id'))
    result_description = Column(String)

    # parent relationships (access parent)
    game : Mapped["Game"] = relationship(back_populates=("GameResultList"))
    winner : Mapped["Player"] = relationship(back_populates=("GameResultList"))

    # child relationships (access children)



class Leaderboard(SAFRSBaseX, Base):
    """
    description: Records the leaderboard standings of players.
    """
    __tablename__ = 'leaderboard'
    _s_collection_name = 'Leaderboard'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player_id = Column(ForeignKey('player.id'))
    score = Column(Integer)

    # parent relationships (access parent)
    player : Mapped["Player"] = relationship(back_populates=("LeaderboardList"))

    # child relationships (access children)



class Moderator(SAFRSBaseX, Base):
    """
    description: Defines moderators who oversee and manage games and tournaments.
    """
    __tablename__ = 'moderator'
    _s_collection_name = 'Moderator'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player_id = Column(ForeignKey('player.id'))
    permissions = Column(String)

    # parent relationships (access parent)
    player : Mapped["Player"] = relationship(back_populates=("ModeratorList"))

    # child relationships (access children)



class Move(SAFRSBaseX, Base):
    """
    description: Records each move made by players during a game.
    """
    __tablename__ = 'move'
    _s_collection_name = 'Move'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    game_id = Column(ForeignKey('game.id'))
    player_id = Column(ForeignKey('player.id'))
    move_notation = Column(String)
    timestamp = Column(DateTime)

    # parent relationships (access parent)
    game : Mapped["Game"] = relationship(back_populates=("MoveList"))
    player : Mapped["Player"] = relationship(back_populates=("MoveList"))

    # child relationships (access children)



class Notification(SAFRSBaseX, Base):
    """
    description: Stores notifications sent to players related to game events.
    """
    __tablename__ = 'notification'
    _s_collection_name = 'Notification'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player_id = Column(ForeignKey('player.id'))
    message = Column(String)
    is_read = Column(Boolean)

    # parent relationships (access parent)
    player : Mapped["Player"] = relationship(back_populates=("NotificationList"))

    # child relationships (access children)



class Payment(SAFRSBaseX, Base):
    """
    description: Records payments and subscriptions made by players.
    """
    __tablename__ = 'payment'
    _s_collection_name = 'Payment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player_id = Column(ForeignKey('player.id'))
    amount = Column(Integer)
    payment_date = Column(DateTime)

    # parent relationships (access parent)
    player : Mapped["Player"] = relationship(back_populates=("PaymentList"))

    # child relationships (access children)



class PlayerAchievement(SAFRSBaseX, Base):
    """
    description: Connects players with their unlocked achievements.
    """
    __tablename__ = 'player_achievement'
    _s_collection_name = 'PlayerAchievement'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player_id = Column(ForeignKey('player.id'))
    achievement_id = Column(ForeignKey('achievement.id'))

    # parent relationships (access parent)
    achievement : Mapped["Achievement"] = relationship(back_populates=("PlayerAchievementList"))
    player : Mapped["Player"] = relationship(back_populates=("PlayerAchievementList"))

    # child relationships (access children)



class PlayerTeam(SAFRSBaseX, Base):
    """
    description: Connects players with teams they are part of within team games.
    """
    __tablename__ = 'player_team'
    _s_collection_name = 'PlayerTeam'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player_id = Column(ForeignKey('player.id'))
    team_id = Column(ForeignKey('team.id'))

    # parent relationships (access parent)
    player : Mapped["Player"] = relationship(back_populates=("PlayerTeamList"))
    team : Mapped["Team"] = relationship(back_populates=("PlayerTeamList"))

    # child relationships (access children)



class PlayerTournament(SAFRSBaseX, Base):
    """
    description: Connects players with tournaments they participate in.
    """
    __tablename__ = 'player_tournament'
    _s_collection_name = 'PlayerTournament'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player_id = Column(ForeignKey('player.id'))
    tournament_id = Column(ForeignKey('tournament.id'))

    # parent relationships (access parent)
    player : Mapped["Player"] = relationship(back_populates=("PlayerTournamentList"))
    tournament : Mapped["Tournament"] = relationship(back_populates=("PlayerTournamentList"))

    # child relationships (access children)



class Report(SAFRSBaseX, Base):
    """
    description: Represents reports made by players about other players.
    """
    __tablename__ = 'report'
    _s_collection_name = 'Report'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    reported_by_id = Column(ForeignKey('player.id'))
    reported_player_id = Column(ForeignKey('player.id'))
    reason = Column(String)

    # parent relationships (access parent)
    reported_by : Mapped["Player"] = relationship(foreign_keys='[Report.reported_by_id]', back_populates=("ReportList"))
    reported_player : Mapped["Player"] = relationship(foreign_keys='[Report.reported_player_id]', back_populates=("reportedReportList"))

    # child relationships (access children)



class RuleViolation(SAFRSBaseX, Base):
    """
    description: Describes instances where players have violated platform rules.
    """
    __tablename__ = 'rule_violation'
    _s_collection_name = 'RuleViolation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player_id = Column(ForeignKey('player.id'))
    description = Column(String)
    date_reported = Column(DateTime)

    # parent relationships (access parent)
    player : Mapped["Player"] = relationship(back_populates=("RuleViolationList"))

    # child relationships (access children)
