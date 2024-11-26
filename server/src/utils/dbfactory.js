// src/crud/model.js
const { User, Event, Payment, Registration, Tournament } = require('../model');

// User CRUD functions
const addUser = async (data) => {
    try {
        const user = await User.create(data);
        return { success: true, data: user };
    } catch (error) {
        console.error('Add user error:', error);
        throw new Error(error.message);
    }
};

const getAllUsers = async () => {
    try {
        const users = await User.find().sort({ updatedAt: -1 });
        return { success: true, data: users };
    } catch (error) {
        console.error('Get all users error:', error);
        throw new Error(error.message);
    }
};

const getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        if (!user) {
            throw new Error('User not found');
        }
        return { success: true, data: user };
    } catch (error) {
        console.error('Get user by ID error:', error);
        throw new Error(error.message);
    }
};

const updateUser = async (id, data) => {
    try {
        const user = await User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (!user) {
            throw new Error('User not found');
        }
        return { success: true, data: user };
    } catch (error) {
        console.error('Update user error:', error);
        throw new Error(error.message);
    }
};

const deleteUser = async (id) => {
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            throw new Error('User not found');
        }
        return { success: true, message: 'User deleted successfully' };
    } catch (error) {
        console.error('Delete user error:', error);
        throw new Error(error.message);
    }
};

// Event CRUD functions
const addEvent = async (data) => {
    try {
        const event = await Event.create(data);
        return { success: true, data: event };
    } catch (error) {
        console.error('Add event error:', error);
        throw new Error(error.message);
    }
};

const getAllEvents = async () => {
    try {
        const events = await Event.find().sort({ updatedAt: -1 });
        return { success: true, data: events };
    } catch (error) {
        console.error('Get all events error:', error);
        throw new Error(error.message);
    }
};

const getEventById = async (id) => {
    try {
        const event = await Event.findById(id);
        if (!event) {
            throw new Error('Event not found');
        }
        return { success: true, data: event };
    } catch (error) {
        console.error('Get event by ID error:', error);
        throw new Error(error.message);
    }
};

const updateEvent = async (id, data) => {
    try {
        const event = await Event.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (!event) {
            throw new Error('Event not found');
        }
        return { success: true, data: event };
    } catch (error) {
        console.error('Update event error:', error);
        throw new Error(error.message);
    }
};

const deleteEvent = async (id) => {
    try {
        const event = await Event.findByIdAndDelete(id);
        if (!event) {
            throw new Error('Event not found');
        }
        return { success: true, message: 'Event deleted successfully' };
    } catch (error) {
        console.error('Delete event error:', error);
        throw new Error(error.message);
    }
};

// Payment CRUD functions
const addPayment = async (data) => {
    try {
        const payment = await Payment.create(data);
        return { success: true, data: payment };
    } catch (error) {
        console.error('Add payment error:', error);
        throw new Error(error.message);
    }
};

const getAllPayments = async () => {
    try {
        const payments = await Payment.find().sort({ updatedAt: -1 });
        return { success: true, data: payments };
    } catch (error) {
        console.error('Get all payments error:', error);
        throw new Error(error.message);
    }
};

const getPaymentById = async (id) => {
    try {
        const payment = await Payment.findById(id);
        if (!payment) {
            throw new Error('Payment not found');
        }
        return { success: true, data: payment };
    } catch (error) {
        console.error('Get payment by ID error:', error);
        throw new Error(error.message);
    }
};

const updatePayment = async (id, data) => {
    try {
        const payment = await Payment.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (!payment) {
            throw new Error('Payment not found');
        }
        return { success: true, data: payment };
    } catch (error) {
        console.error('Update payment error:', error);
        throw new Error(error.message);
    }
};

const deletePayment = async (id) => {
    try {
        const payment = await Payment.findByIdAndDelete(id);
        if (!payment) {
            throw new Error('Payment not found');
        }
        return { success: true, message: 'Payment deleted successfully' };
    } catch (error) {
        console.error('Delete payment error:', error);
        throw new Error(error.message);
    }
};

// Registration CRUD functions
const addRegistration = async (data) => {
    try {
        const registration = await Registration.create(data);
        return { success: true, data: registration };
    } catch (error) {
        console.error('Add registration error:', error);
        throw new Error(error.message);
    }
};

const getAllRegistrations = async () => {
    try {
        const registrations = await Registration.find().sort({ updatedAt: -1 });
        return { success: true, data: registrations };
    } catch (error) {
        console.error('Get all registrations error:', error);
        throw new Error(error.message);
    }
};

const getRegistrationById = async (id) => {
    try {
        const registration = await Registration.findById(id);
        if (!registration) {
            throw new Error('Registration not found');
        }
        return { success: true, data: registration };
    } catch (error) {
        console.error('Get registration by ID error:', error);
        throw new Error(error.message);
    }
};

const updateRegistration = async (id, data) => {
    try {
        const registration = await Registration.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (!registration) {
            throw new Error('Registration not found');
        }
        return { success: true, data: registration };
    } catch (error) {
        console.error('Update registration error:', error);
        throw new Error(error.message);
    }
};

const deleteRegistration = async (id) => {
    try {
        const registration = await Registration.findByIdAndDelete(id);
        if (!registration) {
            throw new Error('Registration not found');
        }
        return { success: true, message: 'Registration deleted successfully' };
    } catch (error) {
        console.error('Delete registration error:', error);
        throw new Error(error.message);
    }
};

// Tournament CRUD functions
const addTournament = async (data) => {
    try {
        const tournament = await Tournament.create(data);
        return { success: true, data: tournament };
    } catch (error) {
        console.error('Add tournament error:', error);
        throw new Error(error.message);
    }
};

const getAllTournaments = async () => {
    try {
        const tournaments = await Tournament.find().sort({ updatedAt: -1 });
        return { success: true, data: tournaments };
    } catch (error) {
        console.error('Get all tournaments error:', error);
        throw new Error(error.message);
    }
};

const getTournamentById = async (id) => {
    try {
        const tournament = await Tournament.findById(id);
        if (!tournament) {
            throw new Error('Tournament not found');
        }
        return { success: true, data: tournament };
    } catch (error) {
        console.error('Get tournament by ID error:', error);
        throw new Error(error.message);
    }
};

const updateTournament = async (id, data) => {
    try {
        const tournament = await Tournament.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (!tournament) {
            throw new Error('Tournament not found');
        }
        return { success: true, data: tournament };
    } catch (error) {
        console.error('Update tournament error:', error);
        throw new Error(error.message);
    }
};

const deleteTournament = async (id) => {
    try {
        const tournament = await Tournament.findByIdAndDelete(id);
        if (!tournament) {
            throw new Error('Tournament not found');
        }
        return { success: true, message: 'Tournament deleted successfully' };
    } catch (error) {
        console.error('Delete tournament error:', error);
        throw new Error(error.message);
    }
};

// Exporting all CRUD functions
module.exports = {
    // User functions
    addUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,

    // Event functions
    addEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,

    // Payment functions
    addPayment,
    getAllPayments,
    getPaymentById,
    updatePayment,
    deletePayment,

    // Registration functions
    addRegistration,
    getAllRegistrations,
    getRegistrationById,
    updateRegistration,
    deleteRegistration,

    // Tournament functions
    addTournament,
    getAllTournaments,
    getTournamentById,
    updateTournament,
    deleteTournament,
};     