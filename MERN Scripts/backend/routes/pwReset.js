const express = require("express");
const router = express.Router();
const Models = require("../models/models.js");
const Employee = Models.Employee;
const ResetToken = require('../models/ResetToken');
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { sendError, createRandomBytes } = require('../models/helper');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/", async (req, res) => {
    const username  = req.body.Username;
    if(!username)
        return res.status(401).json({success: false, message: "Please provide a valid username"});

    const employee = await Employee.findOne({Username: username});
    if (!employee)
        return res.status(401).json({success: false, message: "User not found, invalid request"});
    
    const token = await ResetToken.findOne({owner: employee._id});
    if (token)
        return res.status(401).json({success: false, message: "You can only request a password change once per hour,\ncheck your email for a password rest link or wait until it expires ( <1hr )"});

    const randomBytes = await createRandomBytes();
    const newResetToken = new ResetToken({owner: employee._id, token: randomBytes});
    await newResetToken.save();

    //send email
    const msg = {
        to: employee.Email,
        from: process.env.EMAIL,
        subject: "Ogopogo OAC - Password reset",
        text: "\n",
        html: `<p>Please use the following link to reset your password, this link will expire 30-60 minutes after it was created:<br>Click <a href="http://localhost:3000/reset-password?token=${randomBytes}&id=${employee._id}">here</a> or copy and paste the link into a new window:\nhttp://localhost:3000/reset-password?token=${randomBytes}&id=${employee._id}</p>`
      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent');
        })
        .catch((error) => {
          console.error("THERE WAS AN ERROR" + error)
        });


    res.json({success: true, message: 'password reset link has been sent to your email'});
});


module.exports = router;