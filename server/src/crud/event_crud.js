const {Event} = require('../model');
const dbFactory = require('../utils/dbfactory');

const addEvent = (data) => dbFactory.addEvent(Event, data);
const getEvents = () => dbFactory.getAllEvents(Event);
const getEventById = (id) => dbFactory.getEventById(Event, id);
const updateEvent = (id, data) => dbFactory.updateEvent(Event, id, data);
const deleteEvent = (id) => dbFactory.deleteEvent(Event, id);

module.exports = { addEvent, getEventById, getEvents, updateEvent, deleteEvent };
