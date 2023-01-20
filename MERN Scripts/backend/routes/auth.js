const express = require("express");
const router = express.Router();
const Models = require("../models.js");
const Joi = require("joi");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try {
        const{error} = validate(req.body);
        if (error)
            return res.status(400).send({message: error.details[0].message});

        const emp = await Models.Employee.findOne({email: req.body.Username});
        if (!emp)
            return res.status(401).send({message: "invalid Username or password"});

        const validPassword = await bcrypt.compare(
            req.body.Password, emp.Password
        );
        if (!validPassword)
            return res.status(401).send({message: "invalid Username or password"});

        const token = emp.generateAuthToken();
        res.status(200).send({data: token, message: "Logged in successfully"});

    } catch (error) {
        res.status(500).send({message: "internal server error"});
    }
});

const validate = (data) => {
    const schema = Joi.object({
        Username: Joi.string().required().label('Username'),
        Password: Joi.string().required().label('Password')
    });
    return schema.validate(data)
}

module.exports = router;