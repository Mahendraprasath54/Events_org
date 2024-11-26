const registrationCrud = require('../crud/registration_crud');

const getAllRegistrations = async (req, res) => {
    try {
        const result = await registrationCrud.getRegistrations();
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getRegistrationById = async (req, res) => {
    try {
        const result = await registrationCrud.getRegistrationById(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'Registration not found' ? 404 : 500)
           .json({ success: false, message: error.message });
    }
};

const createRegistration = async (req, res) => {
    try {
        const result = await registrationCrud.addRegistration(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const updateRegistration = async (req, res) => {
    try {
        const result = await registrationCrud.updateRegistration(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'Registration not found' ? 404 : 400)
           .json({ success: false, message: error.message });
    }
};

const deleteRegistration = async (req, res) => {
    try {
        const result = await registrationCrud.deleteRegistration(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'Registration not found' ? 404 : 500)
           .json({ success: false, message: error.message });
    }
};

module.exports = {
    getAllRegistrations,
    getRegistrationById,
    createRegistration,
    updateRegistration,
    deleteRegistration
};
