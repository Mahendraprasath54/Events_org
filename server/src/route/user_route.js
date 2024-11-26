const userRouter = require('express').Router();
const userControl = require('../controller/user_controller');

userRouter.post('/', userControl.createUser);

userRouter.get('/', userControl.getAllUsers);

userRouter.get('/:id', userControl.getUserById);

userRouter.put('/:id', userControl.updateUser);

userRouter.delete('/:id', userControl.deleteUser);

module.exports = userRouter;
