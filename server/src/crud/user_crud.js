const dbFactory = require('../utils/dbfactory');

const addUser = (data) => dbFactory.userAdd(data);
const getUsers = () => dbFactory.userGetAll();
const getUserById = (id) => dbFactory.userGetById(id);
const updateUser = (id, data) => dbFactory.userUpdate(id, data);
const deleteUser = (id) => dbFactory.userDelete(id);

module.exports = { addUser, getUserById, getUsers, updateUser, deleteUser };
