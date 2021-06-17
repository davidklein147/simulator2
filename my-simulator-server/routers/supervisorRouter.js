const express = require("express")

const router = express.Router();
router.post("/addTest", require("../controllers/supervisorController").addTest)

module.exports = router