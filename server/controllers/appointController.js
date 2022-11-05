module.exports.appointments = (req, res) => {
  res.send({ message: "Appointment no 1" });
};

module.exports.history = (req, res) => {
  res.send({ message: "Appointment done at DD/YY/MM" });
};
