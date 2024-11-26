const tournamentCrud = require('../crud/tournament_crud');

const getAllTournaments = async (req, res) => {
    try {
        const result = await tournamentCrud.getTournaments();
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getTournamentById = async (req, res) => {
    try {
        const result = await tournamentCrud.getTournamentById(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'Tournament not found' ? 404 : 500)
           .json({ success: false, message: error.message });
    }
};

const createTournament = async (req, res) => {
    try {
        const result = await tournamentCrud.addTournament(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const updateTournament = async (req, res) => {
    try {
        const result = await tournamentCrud.updateTournament(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'Tournament not found' ? 404 : 400)
           .json({ success: false, message: error.message });
    }
};

const deleteTournament = async (req, res) => {
    try {
        const result = await tournamentCrud.deleteTournament(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'Tournament not found' ? 404 : 500)
           .json({ success: false, message: error.message });
    }
};

module.exports = {
    getAllTournaments,
    getTournamentById,
    createTournament,
    updateTournament,
    deleteTournament
}