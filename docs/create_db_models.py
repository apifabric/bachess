# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import random
from datetime import datetime, timedelta

Base = declarative_base()

class Player(Base):
    """description: Represents a player participating in the chess platform."""
    __tablename__ = 'player'
    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, unique=True)
    email = Column(String)

class Game(Base):
    """description: Stores information about a chess game."""
    __tablename__ = 'game'
    id = Column(Integer, primary_key=True, autoincrement=True)
    start_time = Column(DateTime)
    is_completed = Column(Boolean, default=False)

class Move(Base):
    """description: Records each move made by players during a game."""
    __tablename__ = 'move'
    id = Column(Integer, primary_key=True, autoincrement=True)
    game_id = Column(Integer, ForeignKey('game.id'))
    player_id = Column(Integer, ForeignKey('player.id'))
    move_notation = Column(String)
    timestamp = Column(DateTime)

class Tournament(Base):
    """description: Information regarding chess tournaments."""
    __tablename__ = 'tournament'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    start_date = Column(DateTime)
    end_date = Column(DateTime)

class PlayerTournament(Base):
    """description: Connects players with tournaments they participate in."""
    __tablename__ = 'player_tournament'
    id = Column(Integer, primary_key=True, autoincrement=True)
    player_id = Column(Integer, ForeignKey('player.id'))
    tournament_id = Column(Integer, ForeignKey('tournament.id'))

class Chat(Base):
    """description: Contains chat messages exchanged during a game."""
    __tablename__ = 'chat'
    id = Column(Integer, primary_key=True, autoincrement=True)
    game_id = Column(Integer, ForeignKey('game.id'))
    player_id = Column(Integer, ForeignKey('player.id'))
    message = Column(String)
    timestamp = Column(DateTime)

class Leaderboard(Base):
    """description: Records the leaderboard standings of players."""
    __tablename__ = 'leaderboard'
    id = Column(Integer, primary_key=True, autoincrement=True)
    player_id = Column(Integer, ForeignKey('player.id'))
    score = Column(Integer)

class EloRating(Base):
    """description: Tracks the Elo ratings of players."""
    __tablename__ = 'elo_rating'
    id = Column(Integer, primary_key=True, autoincrement=True)
    player_id = Column(Integer, ForeignKey('player.id'))
    rating = Column(Integer)

class Friends(Base):
    """description: Represents friend relations between players."""
    __tablename__ = 'friends'
    id = Column(Integer, primary_key=True, autoincrement=True)
    player_id = Column(Integer, ForeignKey('player.id'))
    friend_id = Column(Integer, ForeignKey('player.id'))

class Achievement(Base):
    """description: Describes achievements that can be unlocked by players."""
    __tablename__ = 'achievement'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    description = Column(String)

class PlayerAchievement(Base):
    """description: Connects players with their unlocked achievements."""
    __tablename__ = 'player_achievement'
    id = Column(Integer, primary_key=True, autoincrement=True)
    player_id = Column(Integer, ForeignKey('player.id'))
    achievement_id = Column(Integer, ForeignKey('achievement.id'))

class ChessClub(Base):
    """description: Represents chess clubs players can join."""
    __tablename__ = 'chess_club'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    location = Column(String)

class ClubMembership(Base):
    """description: Connects players with the chess clubs they are part of."""
    __tablename__ = 'club_membership'
    id = Column(Integer, primary_key=True, autoincrement=True)
    player_id = Column(Integer, ForeignKey('player.id'))
    club_id = Column(Integer, ForeignKey('chess_club.id'))

class Notification(Base):
    """description: Stores notifications sent to players related to game events."""
    __tablename__ = 'notification'
    id = Column(Integer, primary_key=True, autoincrement=True)
    player_id = Column(Integer, ForeignKey('player.id'))
    message = Column(String)
    is_read = Column(Boolean, default=False)

class ChessBoard(Base):
    """description: Represents the initial state and setup of a chess game board."""
    __tablename__ = 'chess_board'
    id = Column(Integer, primary_key=True, autoincrement=True)
    game_id = Column(Integer, ForeignKey('game.id'))
    board_state = Column(String)

class Team(Base):
    """description: Represents teams in collaborative chess games."""
    __tablename__ = 'team'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)

class PlayerTeam(Base):
    """description: Connects players with teams they are part of within team games."""
    __tablename__ = 'player_team'
    id = Column(Integer, primary_key=True, autoincrement=True)
    player_id = Column(Integer, ForeignKey('player.id'))
    team_id = Column(Integer, ForeignKey('team.id'))

class GameResult(Base):
    """description: Stores the results of completed games."""
    __tablename__ = 'game_result'
    id = Column(Integer, primary_key=True, autoincrement=True)
    game_id = Column(Integer, ForeignKey('game.id'))
    winner_id = Column(Integer, ForeignKey('player.id'))
    result_description = Column(String)

class Moderator(Base):
    """description: Defines moderators who oversee and manage games and tournaments."""
    __tablename__ = 'moderator'
    id = Column(Integer, primary_key=True, autoincrement=True)
    player_id = Column(Integer, ForeignKey('player.id'))
    permissions = Column(String)

class Report(Base):
    """description: Represents reports made by players about other players."""
    __tablename__ = 'report'
    id = Column(Integer, primary_key=True, autoincrement=True)
    reported_by_id = Column(Integer, ForeignKey('player.id'))
    reported_player_id = Column(Integer, ForeignKey('player.id'))
    reason = Column(String)

class Ban(Base):
    """description: Contains ban records imposed on players."""
    __tablename__ = 'ban'
    id = Column(Integer, primary_key=True, autoincrement=True)
    player_id = Column(Integer, ForeignKey('player.id'))
    start_date = Column(DateTime)
    end_date = Column(DateTime)

class BugReport(Base):
    """description: Stores bug reports submitted by players."""
    __tablename__ = 'bug_report'
    id = Column(Integer, primary_key=True, autoincrement=True)
    player_id = Column(Integer, ForeignKey('player.id'))
    description = Column(String)

class Payment(Base):
    """description: Records payments and subscriptions made by players."""
    __tablename__ = 'payment'
    id = Column(Integer, primary_key=True, autoincrement=True)
    player_id = Column(Integer, ForeignKey('player.id'))
    amount = Column(Integer)
    payment_date = Column(DateTime)

class RuleViolation(Base):
    """description: Describes instances where players have violated platform rules."""
    __tablename__ = 'rule_violation'
    id = Column(Integer, primary_key=True, autoincrement=True)
    player_id = Column(Integer, ForeignKey('player.id'))
    description = Column(String)
    date_reported = Column(DateTime)

# Create database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Create a session
Session = sessionmaker(bind=engine)
session = Session()

# Generate sample data
def create_sample_data():
    """Generate sample data for each table."""
    # Players
    player_ids = []
    for i in range(100):
        player = Player(username=f'user_{i}', email=f'user_{i}@chess.com')
        session.add(player)
        session.flush()  # Obtain player ID immediately
        player_ids.append(player.id)

    # Games
    game_ids = []
    for i in range(50):
        game = Game(start_time=datetime.now() - timedelta(days=random.randint(1, 365)), 
                    is_completed=random.choice([True, False]))
        session.add(game)
        session.flush()
        game_ids.append(game.id)

    # Moves
    for _ in range(200):
        move = Move(game_id=random.choice(game_ids),
                    player_id=random.choice(player_ids),
                    move_notation=f'Move_{random.randint(1, 50)}',
                    timestamp=datetime.now())
        session.add(move)

    # Tournaments
    tournament_ids = []
    for i in range(10):
        tournament = Tournament(name=f'Tournament_{i}', 
                                start_date=datetime.now() - timedelta(days=30), 
                                end_date=datetime.now())
        session.add(tournament)
        session.flush()
        tournament_ids.append(tournament.id)

    # PlayerTournament
    for _ in range(50):
        player_tournament = PlayerTournament(player_id=random.choice(player_ids),
                                             tournament_id=random.choice(tournament_ids))
        session.add(player_tournament)

    # Chats
    for _ in range(100):
        chat = Chat(game_id=random.choice(game_ids),
                    player_id=random.choice(player_ids),
                    message=f'Chat Message {random.randint(1, 100)}',
                    timestamp=datetime.now())
        session.add(chat)

    # Leaderboard
    for player_id in player_ids:
        leaderboard = Leaderboard(player_id=player_id, score=random.randint(0, 1000))
        session.add(leaderboard)

    # EloRating
    for player_id in player_ids:
        elo_rating = EloRating(player_id=player_id, rating=random.randint(800, 2800))
        session.add(elo_rating)

    # Friends
    for _ in range(100):
        friends = Friends(player_id=random.choice(player_ids),
                          friend_id=random.choice(player_ids))
        session.add(friends)

    # Achievements
    achievement_ids = []
    for i in range(10):
        achievement = Achievement(name=f'Achievement_{i}', description=f'Description for Achievement_{i}')
        session.add(achievement)
        session.flush()
        achievement_ids.append(achievement.id)

    # PlayerAchievement
    for _ in range(50):
        player_achievement = PlayerAchievement(player_id=random.choice(player_ids),
                                               achievement_id=random.choice(achievement_ids))
        session.add(player_achievement)

    # Chess Clubs
    club_ids = []
    for i in range(10):
        chess_club = ChessClub(name=f'Chess Club_{i}', location=f'Location_{i}')
        session.add(chess_club)
        session.flush()
        club_ids.append(chess_club.id)

    # Club Membership
    for _ in range(50):
        club_membership = ClubMembership(player_id=random.choice(player_ids),
                                         club_id=random.choice(club_ids))
        session.add(club_membership)

    # Notifications
    for _ in range(100):
        notification = Notification(player_id=random.choice(player_ids),
                                    message=f'Notification Message {random.randint(1, 100)}',
                                    is_read=random.choice([True, False]))
        session.add(notification)

    # Chess Boards
    for game_id in game_ids:
        chess_board = ChessBoard(game_id=game_id, board_state='Initial Board State')
        session.add(chess_board)

    # Teams
    team_ids = []
    for i in range(10):
        team = Team(name=f'Team_{i}')
        session.add(team)
        session.flush()
        team_ids.append(team.id)

    # Player Team
    for _ in range(50):
        player_team = PlayerTeam(player_id=random.choice(player_ids),
                                 team_id=random.choice(team_ids))
        session.add(player_team)

    # Game Results
    for _ in range(20):
        game_result = GameResult(game_id=random.choice(game_ids),
                                 winner_id=random.choice(player_ids),
                                 result_description='Sample Result Description')
        session.add(game_result)

    # Moderators
    for _ in range(10):
        moderator = Moderator(player_id=random.choice(player_ids),
                              permissions='Manage Games and Tournaments')
        session.add(moderator)

    # Reports
    for _ in range(20):
        report = Report(reported_by_id=random.choice(player_ids),
                        reported_player_id=random.choice(player_ids),
                        reason='Inappropriate Behavior')
        session.add(report)

    # Bans
    for _ in range(5):
        ban = Ban(player_id=random.choice(player_ids),
                  start_date=datetime.now(),
                  end_date=datetime.now() + timedelta(days=30))
        session.add(ban)

    # Bug Reports
    for _ in range(10):
        bug_report = BugReport(player_id=random.choice(player_ids),
                               description='Sample Bug Description')
        session.add(bug_report)

    # Payments
    for _ in range(20):
        payment = Payment(player_id=random.choice(player_ids),
                          amount=random.randint(10, 100),
                          payment_date=datetime.now())
        session.add(payment)

    # Rule Violations
    for _ in range(20):
        rule_violation = RuleViolation(player_id=random.choice(player_ids),
                                       description='Cheating Detected',
                                       date_reported=datetime.now())
        session.add(rule_violation)

    session.commit()

# Generate sample data
create_sample_data()
session.close()
