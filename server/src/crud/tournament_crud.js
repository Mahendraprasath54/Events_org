const dbFactory = require('../utils/dbfactory');

const addTournament = (data) => dbFactory.tournamentAdd(data);
const getTournaments = () => dbFactory.tournamentGetAll();
const getTournamentById = (id) => dbFactory.tournamentGetById(id);
const updateTournament = (id, data) => dbFactory.tournamentUpdate(id, data);
const deleteTournament = (id) => dbFactory.tournamentDelete(id);

module.exports = { addTournament, getTournamentById, getTournaments, updateTournament, deleteTournament };
