const {Tournament} = require('../model');
const dbFactory = require('../utils/dbfactory');

const addTournament = (data) => dbFactory.addTournament(Tournament, data);
const getTournaments = () => dbFactory.getAllTournaments(Tournament);
const getTournamentById = (id) => dbFactory.getTournamentById(Tournament, id);
const updateTournament = (id, data) => dbFactory.updateTournament(Tournament, id, data);
const deleteTournament = (id) => dbFactory.deleteTournament(Tournament, id);

module.exports = { addTournament, getTournamentById, getTournaments, updateTournament, deleteTournament };
