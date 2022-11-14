const { Router } = require("express");
const appointController = require("../controllers/appointController");
const verify = require("./verifyToken")

const router = Router();

router.post("/appointments", appointController.postAppointments);
router.get("/appointments", appointController.getAppointments);
router.get("/appointments/:id", appointController.getAppointmentsById);
router.delete("/appointments/:id", appointController.deleteAppointmentsById);
router.get("/history",  appointController.history);

module.exports = router;
