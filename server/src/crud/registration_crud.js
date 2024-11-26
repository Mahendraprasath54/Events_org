const {Registration} = require('../model');
const dbFactory = require('../utils/dbfactory');

const addRegistration = (data) => dbFactory.addPayment(Registration, data);
const getRegistrations = () => dbFactory.getAllRegistrations(Registration);
const getRegistrationById = (id) => dbFactory.getRegistrationById(Registration, id);
const updateRegistration = (id, data) => dbFactory.updateRegistration(Registration, id, data);
const deleteRegistration = (id) => dbFactory.deleteRegistration(Registration, id);

module.exports = { addRegistration, getRegistrationById, getRegistrations, updateRegistration, deleteRegistration };
