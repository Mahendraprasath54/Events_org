const dbFactory = require('../utils/dbfactory');

const addRegistration = (data) => dbFactory.registrationAdd(data);
const getRegistrations = () => dbFactory.registrationGetAll();
const getRegistrationById = (id) => dbFactory.registrationGetById(id);
const updateRegistration = (id, data) => dbFactory.registrationUpdate(id, data);
const deleteRegistration = (id) => dbFactory.registrationDelete(id);

module.exports = { addRegistration, getRegistrationById, getRegistrations, updateRegistration, deleteRegistration };
