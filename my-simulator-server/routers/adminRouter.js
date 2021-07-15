const express = require('express');


const router = express.Router();
router.post('/addAcademic', require('../controllers/adminController').addAcademic);
router.get('/getallacademics', require('../controllers/adminController').getAllAcademics);

module.exports = router;