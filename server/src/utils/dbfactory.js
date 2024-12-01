const { User, Event, Registration, Tournament, Payment } = require('../model');

// Add Entity
const addEntity = async (Model, data) => {
    try {
        const record = await Model.create(data);
        return { success: true, data: record };
    } catch (error) {
        console.error(`Add ${Model.modelName} error:`, error);
        throw new Error(error.message);
    }
};

// Get All Entities
const getAllEntities = async (Model) => {
    try {
        const records = await Model.find().sort({ updatedAt: -1 });
        return { success: true, data: records };
    } catch (error) {
        console.error(`Get all ${Model.modelName} error:`, error);
        throw new Error(error.message);
    }
};

// Get Entity by ID
const getEntityById = async (Model, id) => {
    try {
        const record = await Model.findById(id);
        if (!record) {
            throw new Error(`${Model.modelName} not found`);
        }
        return { success: true, data: record };
    } catch (error) {
        console.error(`Get ${Model.modelName} by ID error:`, error);
        throw new Error(error.message);
    }
};

// Update Entity
const updateEntity = async (Model, id, data) => {
    try {
        const record = await Model.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (!record) {
            throw new Error(`${Model.modelName} not found`);
        }
        return { success: true, data: record };
    } catch (error) {
        console.error(`Update ${Model.modelName} error:`, error);
        throw new Error(error.message);
    }
};

// Delete Entity
const deleteEntity = async (Model, id) => {
    try {
        const record = await Model.findByIdAndDelete(id);
        if (!record) {
            throw new Error(`${Model.modelName} not found`);
        }
        return { success: true, message: `${Model.modelName} deleted successfully` };
    } catch (error) {
        console.error(`Delete ${Model.modelName} error:`, error);
        throw new Error(error.message);
    }
};

// Exporting the methods for each model
module.exports = {
    userAdd: (data) => addEntity(User, data),
    userGetAll: () => getAllEntities(User),
    userGetById: (id) => getEntityById(User, id),
    userUpdate: (id, data) => updateEntity(User, id, data),
    userDelete: (id) => deleteEntity(User, id),

    eventAdd: (data) => addEntity(Event, data),
    eventGetAll: () => getAllEntities(Event),
    eventGetById: (id) => getEntityById(Event, id),
    eventUpdate: (id, data) => updateEntity(Event, id, data),
    eventDelete: (id) => deleteEntity(Event, id),

    registrationAdd: (data) => addEntity(Registration, data),
    registrationGetAll: () => getAllEntities(Registration),
    registrationGetById: (id) => getEntityById(Registration, id),
    registrationUpdate: (id, data) => updateEntity(Registration, id, data),
    registrationDelete: (id) => deleteEntity(Registration, id),

    tournamentAdd: (data) => addEntity(Tournament, data),
    tournamentGetAll: () => getAllEntities(Tournament),
    tournamentGetById: (id) => getEntityById(Tournament, id),
    tournamentUpdate: (id, data) => updateEntity(Tournament, id, data),
    tournamentDelete: (id) => deleteEntity(Tournament, id),

    paymentAdd: (data) => addEntity(Payment, data),
    paymentGetAll: () => getAllEntities(Payment),
    paymentGetById: (id) => getEntityById(Payment, id),
    paymentUpdate: (id, data) => updateEntity(Payment, id, data),
    paymentDelete: (id) => deleteEntity(Payment, id),
};