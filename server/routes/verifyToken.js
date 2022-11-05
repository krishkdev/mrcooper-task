const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  // const token = req.header("auth-token");
  if (token == null) {
    return res.status(201).send("Access denied!");
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET); //remove in production
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
}
