const express = require("express");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const UserLoginModel = require("../models/users");

const ForgotPasswordRouter = express.Router();

ForgotPasswordRouter.post("/", (req, res) => {
  const { email } = req.body;
  if (req.body.email === "") {
    res.status(400).send("email required");
  }
  console.log(req.body.email);
  UserLoginModel.findOne({ email })
    .exec()
    .then(user => {
      if (user === null) {
        console.error("email not in database");
        res.status(403).send({
         data:"email not in db"
        });
      } else {
        const token = crypto.randomBytes(20).toString("hex");
        const myQuery = {
            email : email
        };
        UserLoginModel.updateOne(myQuery,{
          resetPasswordToken: token,
          resetPasswordExpires: Date.now() + 3600000
        },(err,res) => {
          if (err){
            console.log("error occured when update the reset link in DB    \n"+err);
          }
          else{
            console.log("reset link updated in DB");
          }
        });

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
          }
        });

        const mailOptions = {
          from: "techlearningsite.2020@gmail.com",
          to: `${user.email}`,
          subject: "Link To Reset Password",
          text:
            "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
            "Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n" +
            `${process.env.CLIENT_DOMAIN}/reset/${token}\n\n` +
            "If you did not request this, please ignore this email  and your password will remain unchanged.\n"
        };

        // console.log("sending mail");

        transporter.sendMail(mailOptions, (err, response) => {
          if (err) {
            // console.error("there was an error: ", err);
            res.status(200).json({
              data: {
                message: "error occured"
              }
             });
          } else {
            // console.log("here is the res: ", response);
            res.status(200).json({
             data: "recovery email sent"
            });
          }
        });
      }
    });
});

module.exports = ForgotPasswordRouter;
