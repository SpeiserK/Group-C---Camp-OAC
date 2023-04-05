var mongoose = require('mongoose');
require('dotenv').config();
const options = {
    dbName: 'mydb'
  };
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, options);
const connection = mongoose.connection;
connection.once('open',()=> {
    console.log("MongoDB database connection established successfully");
})

const Models = require("./models/models.js");

const newMisc = new Models.Misc({
    Price: 9.99
});

newMisc.save()
.then((doc) => {
    console.log("Doc saved");
})
.catch((err) => {
    console.log("failure: " + err);
});