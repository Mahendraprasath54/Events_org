const dbFactory = require('../utils/dbfactory');

const addEvent = (data) => dbFactory.eventAdd(data);
const getEvents = () => dbFactory.eventGetAll();
const getEventById = (id) => dbFactory.eventGetById(id);
const updateEvent = (id, data) => dbFactory.eventUpdate(id, data);
const deleteEvent = (id) => dbFactory.eventDelete(id);

module.exports = { addEvent, getEventById, getEvents, updateEvent, deleteEvent };
