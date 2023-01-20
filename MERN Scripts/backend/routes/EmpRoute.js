const express = require("express");
const router = express.Router();
const Models = require("../models.js");
const bcrypt = require("bcrypt");

router.post("/", async (req,res) => {
    try {
        const {error} = Models.validate(req.body);
        if (error){
            console.log(error);
            return res.status(400).send({message: error.details[0].message});
        }
        const emp = await Models.Employee.findOne({Username: req.body.Username});
        if (emp)
            return res.status(409).send({message: "Username already in use"});
        
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.Password, salt);

        await new Models.Employee({...req.body, Password: hashPassword}).save();
        res.status(201).send({message: "User created successfully"});
    } catch (error){
        res.status(500).send({message: "Internal Server Error"});
        console.log(error);
    }
});
module.exports = router;