const { Router } = require("express");
const appointController = require("../controllers/appointController");
const verify = require("./verifyToken")

const router = Router();

router.post("/appointments",verify, appointController.postAppointments);
router.get("/appointments",verify, appointController.getAppointments);
router.get("/appointments/:id",verify, appointController.getAppointmentsById);
router.delete("/appointments/:id",verify, appointController.deleteAppointmentsById);
router.get("/history", verify, appointController.history);

module.exports = router;
