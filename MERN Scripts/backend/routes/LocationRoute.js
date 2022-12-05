const express = require("express");
const router = express.Router();
const Models = require("../models.js");

router.route("/locupdate").post((req, res) => {
    const ID = req.body._id;
    const openStatus = req.body.Open;
    if (!openStatus){
        return res.status(422).json({error:"Missing Fields"})
    }
    res.json("Posted successfully");
    


    const Location = Models.Location;
    //Query filter
    const filter = {_id: ID};    
    //changes to be made to first doc found
    const update = {Open: openStatus};

    let doc = Location.findOneAndUpdate(filter, update, {returnNewDocument: true},
        function (err, res) {
            if (err) return console.error(err);
            console.log(res.Name + " saved to orders collection");
          });

})