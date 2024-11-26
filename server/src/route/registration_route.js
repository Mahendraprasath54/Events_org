const registrationRouter = require('express').Router();
const registrationControl = require('../controller/registration_controller');

registrationRouter.post('/', registrationControl.createRegistration);

registrationRouter.get('/', registrationControl.getAllRegistrations);

registrationRouter.get('/:id', registrationControl.getRegistrationById);

registrationRouter.put('/:id', registrationControl.updateRegistration);

registrationRouter.delete('/:id', registrationControl.deleteRegistration);

module.exports = registrationRouter;
