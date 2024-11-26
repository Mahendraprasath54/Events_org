const eventRouter = require('express').Router();
const eventControl = require('../controller/event_controller');

eventRouter.post('/', eventControl.createEvent);

eventRouter.get('/', eventControl.getAllEvents);

eventRouter.get('/:id', eventControl.getEventById);

eventRouter.put('/:id', eventControl.updateEvent);

eventRouter.delete('/:id', eventControl.deleteEvent);

module.exports = eventRouter;
