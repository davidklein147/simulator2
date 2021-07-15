const express = require('express');
const internController = require('../controllers/internController')

const router = express.Router();
router.post('/regmoreinfo', internController.createDoc)
router.post('/answers', internController.answer)
router.get('/getUserWithInternInfo/:_id', internController.gerUserWithInternInfo)

module.exports = router;

