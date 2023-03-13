const express = require("express");
const router = express.Router();
const Models = require("../models/models.js");
const Employee = Models.Employee;
const ResetToken = require('../models/ResetToken');
const promise = require('promise');
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { sendError, createRandomBytes } = require('../models/helper');

router.post("/", async (req, res) => {
    const username  = req.body.Username;
    console.log("mark 1");
    console.log("req: " + req);
    console.log("username: " + username);
    console.log("mark 2");
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
    res.json({success: true, message: 'password reset link has been sent your email' + ` http://localhost:3000/reset-password?token=${randomBytes}&id=${employee._id}`});
});


module.exports = router;