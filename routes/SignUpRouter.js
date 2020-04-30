const express = require("express");
const { generateHashSync } = require("../utils/hash");
const {
  userTokenGenerator,
  userTokenValidator
} = require("../utils/userTokenManager");
const { compareHash } = require("../utils/hash");
const UserLoginModel = require("../models/users");
// const {LoginFunction} = require("./LoginRouter");

const SignUpRouter = express.Router();

SignUpRouter.post("/", (req, res) => {
//   console.log("entered into SignUpRouter");
// console.log(req.body);
  const { email, password,firstname,lastname,phonenumber } = req.body;
  // console.log(email);
  UserLoginModel.findOne({ email })
    .exec()
    .then(userData => {
      if (userData) {
        console.log("User is found");
        // res.status(200).json('UAP');
        res.status(200).send({
          status: "Success",
          userStatus: "UAP"
        });
      } else {

        const UserLoginTest = new UserLoginModel({
            email: email,
            passwordHash: generateHashSync(password),
            firstname : firstname,
            lastname : lastname,
            phonenumber : phonenumber,
            resetPasswordToken : ""
          });

          UserLoginTest
            .save()
            .then(response => {
              // console.log(response);
              // LoginFunction(req);
              const jwtToken = userTokenGenerator({ email });
              // console.log(jwtToken);
              res.status(200).send({
                status: "Success",
                jwtToken
              });
            })
            .catch(error => {
                  console.log("userdata from table find"+error);
                  res.status(400).send("Invalid request !!!! ");
            });
      }
    })
    .catch(error => {
      console.log("UserLoginModel find error" + error);
      res.status(500).send("UserLoginModel find error");
    });
});

// SignUpRouter.get("/isLoggedIn", (req, res) => {
//   // const { jwt = "" } = req.cookies; // use this if using cookies
//   const jwt = req.header("Authorization");
//   console.log("entered into isLoggedIn route");
//   console.log("jwt toke "+jwt);
//   if (userTokenValidator(jwt)) {
//     console.log("jwt token validated");
//     res.json({message : "logged in"});
//   } else {
//     console.log("jwt validation failed");
//     res.send(401).send("unauthorized");
//   }
// });
module.exports = SignUpRouter;