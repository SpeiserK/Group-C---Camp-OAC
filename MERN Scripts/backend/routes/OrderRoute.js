const express = require("express");
const router = express.Router();
const Models = require("../models/models.js");
const nodeMailer = require('nodemailer');

//Nodemailer functions
let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

transporter.verify((err, success) =>{
    err
        ? console.log(err)
        : console.log(`== Server is  ready to take messages from square: ${success} ===`)
});


router.route("/send").post((req, res) => {
    const Name = req.body.Name;
    const Location = req.body.Location;
    const Quantity = Number(req.body.Quantity);
    const phoneNumber = req.body.phoneNumber;
    var Datetime = new Date();
    const Price = Quantity * 9.99;
    Payment = req.body.Payment;
    let Status = "Pending";
    if(Payment == "Credit/Debit"){
        Status = "Approved";
    }
    const Pickup = false;
    var offset = Datetime.getTimezoneOffset();
    Datetime.setMinutes(Datetime.getMinutes()-offset);

    if (!Name||!Location||!Quantity){
        return res.status(422).json({error:"Missing Fields"})
    }
    res.json("Posted successfully");
   
    const newOrder = new Models.Order({
        Name,
        Quantity,
        Location,
        Datetime,
        Price,
        Payment,
        phoneNumber,
        Status,
        Pickup

    });

    newOrder.save()
    .then(order => {
        res.json({message: `${order} order saved successfully`});
    })
    .catch(err => {
        console.log(err);
    }) 

});


module.exports = router;