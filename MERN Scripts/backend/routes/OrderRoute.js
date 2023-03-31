const express = require("express");
const router = express.Router();
const Models = require("../models/models.js");
const nodeMailer = require('nodemailer');
require('dotenv').config();
const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

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

async function getRandomLocation(query) {
   const numItems = await Models.Location.count(query);
   const rand = Math.floor(Math.random() * numItems);
   const randomItem = await Models.Location.findOne(query).skip(rand);
   return randomItem;
}

function formatPhoneNumber(phoneNum) {
    phoneNum = phoneNum.replaceAll("-", "");
    phoneNum = phoneNum.replaceAll("(", "");
    phoneNum = phoneNum.replaceAll(")", "");
    phoneNum = phoneNum.replaceAll(" ", "");
    return phoneNum;
}

router.route("/send").post(async (req, res) => {
    //select address for order
    const loc = await getRandomLocation({Name: req.body.Location});

    //prepare info for order creation
    const Name = req.body.Name;
    const Location = req.body.Location;
    const LocationId = loc._id;
    const LocationAddress = loc.Address;
    const Quantity = Number(req.body.Quantity);
    var phoneNumber = req.body.phoneNumber;
    phoneNumber = formatPhoneNumber(phoneNumber);

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
        LocationId,
        LocationAddress,
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
        
        // need to test if this works this is for sending texts for credit card customers
        // if(Payment == "Credit/Debit"){
        //     client.messages
        //     .create({
        //     from: process.env.TWILIO_PHONE_NUMBER,
        //     to: phoneNumber,
        //     body: `Hello there!\nYour order for firewood bundles from Ogopogo Rotary and Camp OAC has been approved, You can now pickup your order from ${Location}:
        //     \nPickup Address: ${LocationAddress}
        //     \nPickup Location: ${Location}
        //     \nQuantity/price: ${Quantity}/\$${Price}
        //     \nOther Notes: 
        //     \nThank you very much and we will see you soon!
        //     \nTHIS IS AN AUTOMATIC MESSAGE, PLEASE DO NOT REPLY`
        //     })
        //     .then(console.log("success"))
        //     .catch(err => {
        //         console.log(err);
        //         res.send(JSON.stringify({ success: false }));
        //     });
        // }
    })
    .catch(err => {
        console.log(err);
    });

    Models.Location.findByIdAndUpdate(LocationId, {Stock: loc.Stock - Quantity}, (err, doc) => {
        if (err) console.log(err);
    });

});


module.exports = router;