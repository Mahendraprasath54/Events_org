const userCrud = require('../crud/user_crud');

const getAllUsers = async (req, res) => {
    try {
        const result = await userCrud.getUsers();
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const result = await userCrud.getUserById(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'User not found' ? 404 : 500)
           .json({ success: false, message: error.message });
    }
};

const createUser = async (req, res) => {
    try {
        const result = await userCrud.addUser(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const result = await userCrud.updateUser(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'User not found' ? 404 : 400)
           .json({ success: false, message: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const result = await userCrud.deleteUser(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(error.message === 'User not found' ? 404 : 500)
           .json({ success: false, message: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
