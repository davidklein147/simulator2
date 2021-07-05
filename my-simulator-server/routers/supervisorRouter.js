const express = require("express")

const router = express.Router();
router.post("/addTest", require("../controllers/supervisorController").addTest)
router.get("/getAllTests", require("../controllers/supervisorController").getAllTests)

module.exports = router