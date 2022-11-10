const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidator, loginValidator } = require("../validation");

module.exports.register = async (req, res) => {
  //Validate data before creating a user
  const { error } = registerValidator(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  //Check if email already exists
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).send("Email already exists");
  }

  const { name, email, password, catogery, DOB } = req.body;

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  //console.log(hashedPassword);
  try {
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      catogery,
      DOB,
    });
    res.status(201).json({ user: user._id });
  } catch (err) {
    //console.log(err);
    res.status(400).send(err);
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  //Validate data before authenticating a user
  const { error } = loginValidator(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  //Check if email dosen't exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res
      .status(400)
      .send("Email dosen't exists. Please register and try again");
  }
  //Passowrd is incorrect
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Invalid Passowrd");

  //Create and assign JWT token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: "12h",
  });
  res
    .header("auth-token", token)
    .send({ _id: user._id, username: user.name, email: user.email, catogery: user.catogery, DOB: user.DOB, token });
  //console.log(email, password);
};

module.exports.logout = (req, res) => {
  const authHeader = req.headers["authorization"];
  jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    if (logout) {
      res.send({ msg: "You have been Logged Out" });
    } else {
      res.send({ msg: "Error" });
    }
  });
};
