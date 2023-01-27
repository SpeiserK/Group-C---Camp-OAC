const express = require("express");
const router = express.Router();
const Models = require("../models.js");
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

    //If status has been approved, set email parameters with custom location address and send email
    if(Status == "Approved"){
        //email strings, to be used as email inputs
        let emailSub = "";
        let emailContent = "";
        let emailAdd = "";
        emailSub = "Your firewood order has been approved.";
        //get approval date
        var newDate = Datetime;
        //add two days to date of approval for pickup time limit
        newDate.setMinutes(newDate.getMinutes() + 2880);
        let datePickup = newDate.toString();
        //delete timezone details
        datePickup = datePickup.slice(0,11);
        //set address based on location
        switch(Location){
            case 'Rutland':
                emailAdd = "Rutland address";
                break;
            case 'West Kelowna':
                emailAdd = "West K address";
                break;
            case 'Mission':
                emailAdd = "Mission address";
                break;
            case 'Lake Country':
                emailAdd = "Lake Country address";
                break;
            case 'Glenmore':
                emailAdd = "Glenmore address";
                break;
            case 'Central Kelowna':
                emailAdd = "Central K address";
                break;
            default:
                emailAdd = "DEFAULT";
        }
        //set email content
        emailContent = "Hello,\n\nYour order for "+Quantity+" fire wood bundle(s) has been approved for $"
        +Price+" CAD.\nYour pickup address will be "+emailAdd+", your order will be available for pickup until "
        +datePickup+"at CLOSING TIME (PST).\n\nThanks for your support,\nKelowna Rotary Club and Camp OAC";
    
        let mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,          //will replace with Name
            subject: emailSub,
            text: emailContent,
        };

        transporter.sendMail(mailOptions, function (err, data) {
            if(err){
                console.log("Error"+err);
            } else{
                console.log("Email sent successfully");
            }
        });
    }
    

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

})


module.exports = router;