//makes a collection on mongo project
require('dotenv').config({ path: '../../.env' });
var MongoClient = require('mongodb').MongoClient;
var url = process.env.ATLAS_URI;

const mongoose = require('mongoose');
// Set Up the Database connection
mongoose.connect(
  "mongodb+srv://OACgroupC:Q2NuEWhwR7ohRZOE@cluster0.mwpch7j.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'mydb'
})

// Defining User schema
const userSchema = new mongoose.Schema(
  {
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
    

}
)

// Defining User model, first arg is collection name (use lowercase+plural this is filtered somehow), second is schema
const User = mongoose.model('locations', userSchema);

// Create collection of Model
User.createCollection().then(function (collection) {
  console.log('Collection is created!');
});