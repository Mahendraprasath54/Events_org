const tournamentRouter = require('express').Router();
const tournamentControl = require('../controller/tournament_controller');

tournamentRouter.post('/', tournamentControl.createTournament);

tournamentRouter.get('/', tournamentControl.getAllTournaments);

tournamentRouter.get('/:id', tournamentControl.getTournamentById);

tournamentRouter.put('/:id', tournamentControl.updateTournament);

tournamentRouter.delete('/:id', tournamentControl.deleteTournament);

module.exports = tournamentRouter;
