const express = require("express");
const router = express.Router();
const Models = require ("../models.js");


router.route("/newOrder").post((req, res) => {
    const Name = req.body.Name;
    const Quantity = req.body.Location;
    const Location = req.body.Quantity;
    const newOrder = new Models.Order({
        Name,
        Quantity,
        Location

    });

    newOrder.save();    

})


module.exports = router;
console.log(Models.Employee.schema.paths);