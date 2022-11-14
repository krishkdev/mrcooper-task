const Appointment = require("../models/Appointment");

module.exports.getAppointments = async (req, res) => {
  try {
    const result = await Appointment.find({});
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(404).send(err);
  }
};
module.exports.getAppointmentsById = async (req, res) => {
  try {
    const result = await Appointment.find({ userid: req.params.id });
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(404).send(err);
  }
};

module.exports.deleteAppointmentsById = async (req, res) => {
  try {
    const post = await Appointment.findById(req.params.id);
    //console.log(req.body.userid);
    if (true) {
      try {
        await post.delete();
        res.status(200).json("Appointment has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your Appointment!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.postAppointments = async (req, res) => {
  const { username, userid, title, description } = req.body;
  try {
    const appoint = await Appointment.create({
      username,
      userid,
      title,
      description,
    });
    res.status(201).json({ appoint });
  } catch (err) {
    //console.log(err);
    res.status(400).send(err);
  }
};

module.exports.history = (req, res) => {
  res.send({ message: "Appointment done at DD/YY/MM" });
};
