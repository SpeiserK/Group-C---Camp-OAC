const express = require("express");
const router = express.Router();
const Models = require("../models.js");


router.route("/send").post((req, res) => {
    const Name = req.body.Name;
    const Location = req.body.Location;
    const Quantity = Number(req.body.Quantity);
    const newOrder = new Models.Order({
        Name,
        Quantity,
        Location

    });

    newOrder.save();    

})


module.exports = router;