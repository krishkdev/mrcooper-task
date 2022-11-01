const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/auth/login", (req, res) => {
  console.log(req.body);
  if (req.body.username === "admin") {
    res.send({ message: "Hello admin!", isauth: true });
  }else {
    res.send({ message: "Not a user", isAuth: false });
  }
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/auth/login")
);
