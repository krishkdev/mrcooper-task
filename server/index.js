const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

//External routes
const authRoutes = require("./routes/authRoutes");
const appointRoutes = require("./routes/appointRoutes");

// Middlewares
app.use(cors());
app.use(express.json());

//DB connection
const dbURI = process.env.DB_URL;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(8080, () =>
      console.log("App sucessfully started on localhost port 8080")
    )
  )
  .catch((err) => console.log(err));

//Internal routes
app.use("/api/user", authRoutes);
app.use(appointRoutes);
