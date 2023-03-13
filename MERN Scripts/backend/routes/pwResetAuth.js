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
    //validate reset token
    const {token, id} = req.query;

    if(!token || !id)
        return res.status(401).json({success: false, message: "invalid request"});

    if(!isValidObjectId(id))
        return res.status(401).json({success: false, message: "invalid user"});

    const employee = await Employee.findById(id);
    if(!employee)
        return res.status(401).json({success: false, message: "user not found"});

    const resetToken = await ResetToken.findOne({owner: employee._id});
    if(!resetToken)
        return res.status(401).json({success: false, message: "reset token not found"});
    
    const isValid = await resetToken.compareToken(token);
    if(!isValid)
        return res.status(401).json({success: false, message: "reset token is not valid"});
    
    req.employee = employee;
    next();
}, async (req, res) => {
    //validate new password against employee document in mongodb
    const password = req.body.password;
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