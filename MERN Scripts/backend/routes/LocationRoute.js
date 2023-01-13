const express = require("express");
const router = express.Router();
const Models = require("../models.js");

router.route("/locupdate").post((req, res) => {
    const ID = req.body._id;
    const openStatus = req.body.Open;
    const stock = req.body.Stock;
    if (!openStatus||!stock){
        return res.status(422).json({error:"Missing Fields"})
    }
    res.json("Posted successfully");

    const Location = Models.Location;
    /*
    //Query filter
    const filter = {_id: ID};    
    //changes to be made to first doc found
    const update = {Open: openStatus, Stock: stock};

    Location.findOneAndUpdate(filter, update, {returnNewDocument: true},
        function (err, res) {
            if (err) return console.error(err);
            console.log(res.Name + " saved to orders collection");
          });
          */

    //Query filter
    const filter = {_id: "6383e1e2b9f69fb40fd5769d"};    
    //changes to be made to first doc found
    const update = {Stock: 100};

    Location.findOneAndUpdate(filter, update, {returnNewDocument: true},
        function (err, res) {
            if (err) return console.error(err);
            console.log(res.Name + " saved to orders collection");
          });
          

});

module.exports = router;