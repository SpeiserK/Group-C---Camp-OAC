const express = require("express");
const router = express.Router();
const Models = require("../models.js");

router.route("/send").post((req, res) => {
    const Name = req.body.Name;
    const Location = req.body.Location;
    const Quantity = Number(req.body.Quantity);
    var Datetime = new Date();
    const Price = Quantity * 9.99;
    Payment = req.body.Payment;
    const Status = "Pending";
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