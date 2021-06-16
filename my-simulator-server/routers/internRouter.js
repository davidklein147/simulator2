const express = require('express');
const internController = require('../controllers/internController')

const router = express.Router();
router.post('/regmoreinfo', internController.createDoc)
router.get('/gerUserWithInternInfo/:_id', internController.gerUserWithInternInfo)

module.exports = router;

