const express = require('express');
const userController = require ('../controllers/authController')

const router = express.Router();
router.post('/register', userController.createUser);
router.post('/login', userController.login);
router.get('/chacking/:userName', userController.chacking)
router.post('/chacking', userController.chacking)

module.exports = router;
