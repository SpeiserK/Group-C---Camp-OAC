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
    if(!token || !id)
        return sendError(res, "invalid request"); 
    
    if(!isValidObjectId(id))
        return sendError(res, "invalid user");

    const employee = await Employee.findById(id);
    if(!employee)
        return sendError(res, "user not found");

    const resetToken = await ResetToken.findOne({owner: employee._id});
    if(!resetToken)
        return sendError(res,"Reset token not found");
    
    const isValid = await ResetToken.compareToken(token);
    if(!isValid)
        return sendError(res, "invalid token");
    
    req.employee = employee;
    next();
}, async (req, res) => {
    const {password} = req.body.password;

    const employee = await Employee.findById(req.employee._id);
    if(!employee)
        return sendError(res, "employee not found");

    if(password.trim().length < 8 || password.trim().length > 20)
        return sendError(res, "new password must be 8-20 characters in length (no spaces)");
        
    employee.Password = password.trim();
    await employee.save();

    ResetToken.findOneAndDelete({owner: employee._id});
    res.json({success: true, message: 'Password has been reset successfully'});
});


module.exports = router;