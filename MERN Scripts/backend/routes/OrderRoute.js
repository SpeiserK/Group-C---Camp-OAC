const express = require("express");
const router = express.Router();
const Models = require("../models.js");

router.route("/send").post((req, res) => {
    const Name = req.body.Name;
    const Location = req.body.Location;
    const Quantity = Number(req.body.Quantity);
    if (!Name||!Location||!Quantity){
        return res.status(422).json({error:"Missing Fields"})
    }
    res.json("Posted successfully");
    

    const newOrder = new Models.Order({
        Name,
        Quantity,
        Location

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