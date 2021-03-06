
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');
const LoginRouter = require("./routes/LoginRouter");
const SignUpRouter = require("./routes/SignUpRouter");
const ForgotPasswordRouter = require("./routes/ForgotPasswordRouter");
const ResetPasswordRouter = require("./routes/ResetPasswordRouter");
const UpdatePasswordViaEmailRouter = require("./routes/UpdatePasswordViaEmailRouter");

require("dotenv").config();
require("./config/config");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '/frontEnd/build')));

app.get("/", (req, res) => {
  // res.send("Backend for Java site");
  res.sendFile(path.join(__dirname, '/frontEnd/build/index.html'));
});

app.use("/user", LoginRouter);
app.use("/user/Signup", SignUpRouter);
app.use("/forgotPassword", ForgotPasswordRouter);
app.use("/reset", ResetPasswordRouter);
app.use("/updatePasswordViaEmail", UpdatePasswordViaEmailRouter);

app.get('*', (req, res) => { 
  res.sendFile(path.join(__dirname+'/frontEnd/build/index.html'));
 })

const server = app.listen(PORT, () => {
  console.log("Server running on port " + server.address().port);
});
