const { Router } = require("express");
const appointController = require("../controllers/appointController");
const verify = require("./verifyToken")

const router = Router();

router.get("/appointments",verify, appointController.appointments);
router.get("/history", appointController.history);

module.exports = router;
