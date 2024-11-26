const {User} = require('../model');
const dbFactory = require('../utils/dbfactory');

const addUser = (data) => dbFactory.addUser(User, data);
const getUsers = () => dbFactory.getAllUsers(User);
const getUserById = (id) => dbFactory.getUserById(User, id);
const updateUser = (id, data) => dbFactory.updateUser(User, id, data);
const deleteUser = (id) => dbFactory.deleteUser(User, id);

module.exports = { addUser, getUserById, getUsers, updateUser, deleteUser };
