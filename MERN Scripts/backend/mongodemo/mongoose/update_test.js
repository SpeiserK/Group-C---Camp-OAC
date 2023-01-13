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
    const filter = {_id: "6383e1e2b9f69fb40fd5769d"};    
    //changes to be made to first doc found
    const update = {Stock: 85};

    Location.findOneAndUpdate(filter, update, {returnNewDocument: true},
        function (err, res) {
            if (err) return console.error(err);
            console.log(res.Name + " saved to orders collection");
          });
       
  });