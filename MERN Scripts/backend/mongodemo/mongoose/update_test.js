//updates one doc in the mongo collection
var mongoose = require('mongoose')
require('dotenv').config({ path: '../../.env' });
var MongoClient = require('mongodb').MongoClient;
var url = process.env.ATLAS_URI;

//connect to db and save reference
const options = {
  dbName: 'mydb'
};
mongoose.connect(url, options);
var db = mongoose.connection;

db.once('open', function() {
    console.log("Connection Successful!");
     
    // define Schema
    const LocationSchema = new mongoose.Schema ({
        Name:  {
            type: String,
    
        },
        Address:  {
            type: String,
    
        },
        Stock:  {
            type: Number,
    
        },
        Open:  {
            type: Boolean,
    
        },
        
    
    });
    
    const Location = mongoose.model('Location', LocationSchema);
    //Query filter
    const filter = {Name: "West Kelowna"};    
    //changes to be made to first doc found
    const update = {Stock: 999};

    let doc = Location.findOneAndUpdate(filter, update, {returnNewDocument: true},
        function (err, res) {
            if (err) return console.error(err);
            console.log(res.Name + " saved to orders collection");
          });
    console.log(doc);
       
  });