from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging

# use absolute path import for easier multi-{app,model,db} support
database = __import__('database')

app_logger = logging.getLogger(__name__)

app_logger.debug("\napi/expose_api_models.py - endpoint for each table")


def expose_models(api, method_decorators = []): 
    """
        Declare API - on existing SAFRSAPI to expose each model - API automation 
        - Including get (filtering, pagination, related data access) 
        - And post/patch/update (including logic enforcement) 

        Invoked at server startup (api_logic_server_run) 

        You typically do not customize this file 
        - See https://apilogicserver.github.io/Docs/Tutorial/#customize-and-debug 
    """
    api.expose_object(database.models.Achievement, method_decorators= method_decorators)
    api.expose_object(database.models.Ban, method_decorators= method_decorators)
    api.expose_object(database.models.Player, method_decorators= method_decorators)
    api.expose_object(database.models.BugReport, method_decorators= method_decorators)
    api.expose_object(database.models.Chat, method_decorators= method_decorators)
    api.expose_object(database.models.Game, method_decorators= method_decorators)
    api.expose_object(database.models.ChessBoard, method_decorators= method_decorators)
    api.expose_object(database.models.ChessClub, method_decorators= method_decorators)
    api.expose_object(database.models.ClubMembership, method_decorators= method_decorators)
    api.expose_object(database.models.EloRating, method_decorators= method_decorators)
    api.expose_object(database.models.Friend, method_decorators= method_decorators)
    api.expose_object(database.models.GameResult, method_decorators= method_decorators)
    api.expose_object(database.models.Leaderboard, method_decorators= method_decorators)
    api.expose_object(database.models.Moderator, method_decorators= method_decorators)
    api.expose_object(database.models.Move, method_decorators= method_decorators)
    api.expose_object(database.models.Notification, method_decorators= method_decorators)
    api.expose_object(database.models.Payment, method_decorators= method_decorators)
    api.expose_object(database.models.PlayerAchievement, method_decorators= method_decorators)
    api.expose_object(database.models.PlayerTeam, method_decorators= method_decorators)
    api.expose_object(database.models.Team, method_decorators= method_decorators)
    api.expose_object(database.models.PlayerTournament, method_decorators= method_decorators)
    api.expose_object(database.models.Tournament, method_decorators= method_decorators)
    api.expose_object(database.models.Report, method_decorators= method_decorators)
    api.expose_object(database.models.RuleViolation, method_decorators= method_decorators)
    return api
