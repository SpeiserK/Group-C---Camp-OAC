const express = require("express");
const router = express.Router();
const Models = require("../models/models.js");
const Employee = Models.Employee;
const ResetToken = require('../models/ResetToken');
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { sendError, createRandomBytes } = require('../models/helper');
const { isValidObjectId } = require('mongoose');

router.post("/", async (req, res, next) => {
    const {token, id} = req.query;
    console.log("enter api call");
    console.log(req.query);
    console.log("token: " + token);
    console.log("id: " + id);
    if(!token || !id)
        return res.status(401).json({success: false, message: "invalid request"});
    console.log("query received");

    if(!isValidObjectId(id))
        return res.status(401).json({success: false, message: "invalid user"});
    console.log("id is of correct type");

    const employee = await Employee.findById(id);
    if(!employee)
        return res.status(401).json({success: false, message: "user not found"});
    console.log("employee found");

    const resetToken = await ResetToken.findOne({owner: employee._id});
    if(!resetToken)
        return res.status(401).json({success: false, message: "reset token not found"});
    console.log("reset token found");
    
    const isValid = await resetToken.compareToken(token);
    if(!isValid)
        return res.status(401).json({success: false, message: "reset token is not valid"});
    console.log("token id matches db token");
    
    req.employee = employee;
    next();
}, async (req, res) => {
    const password = req.body.password;
    console.log(req.body);
    console.log(typeof req.body.password);
    console.log(req.body.password);
    console.log(req.body.password.length);
    const employee = await Employee.findById(req.employee._id);
    if(!employee)
        return sendError(res, "user not found");

    if(password.length < 8 || password.length > 20)
        return sendError(res, "new password must be 8-20 characters in length (no spaces)");
    
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(password, salt);
    
    employee.Password = hashPassword;
    await employee.save();

    ResetToken.findOneAndDelete({owner: employee._id});
    res.json({success: true, message: 'Password has been reset successfully'});
});


module.exports = router;