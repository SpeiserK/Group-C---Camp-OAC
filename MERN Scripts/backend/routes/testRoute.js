const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Models = require ("../models.js");
const Emp = Models.Employee;

router.get('/', (req, res) => {
    res.send("hello");
})

router.post('addEmp', (req, res) => {
    const {email, passWord} = req.body;
    if (!email||!passWord){
        return res.status(422).json({error:"please add all fields"})
    }
    res.json({message:"successfully posted"})
    Emp.findOne({email: email})
    .then((savedEmp) => {
        if(savedEmp){
            return res.status(422).json({error:"Emp already exists"})
        }
        const emp = new Emp({
            email,
            passWord
        });
        emp.save()
        .then(emp => {
            res.json({message: "saved successfully"});
        })
        .catch(err =>{
            console.log(err);
        })
    })
    .catch(err =>{
        console.log(err);
    })
})


module.exports = router;