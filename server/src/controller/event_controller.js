const eventCrud = require('../crud/event_crud');

const getAllEvents = async (req, res) => {
    try {
        const result = await eventCrud.getEvents();
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getEventById = async (req, res) => {
    try {
        const result = await eventCrud.getEventById(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'Event not found' ? 404 : 500)
           .json({ success: false, message: error.message });
    }
};

const createEvent = async (req, res) => {
    try {
        const result = await eventCrud.addEvent(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const updateEvent = async (req, res) => {
    try {
        const result = await eventCrud.updateEvent(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'Event not found' ? 404 : 400)
           .json({ success: false, message: error.message });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const result = await eventCrud.deleteEvent(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'Event not found' ? 404 : 500)
           .json({ success: false, message: error.message });
    }
};

module.exports = {
    getAllEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent
};
