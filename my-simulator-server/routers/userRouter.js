const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const routers = express.Router();
routers.get('/getuser',userController.getUser);
routers.get('/getAllUsers',userController.getAllUsers);
routers.post('/createUser',authController.createUser);

module.exports = routers;