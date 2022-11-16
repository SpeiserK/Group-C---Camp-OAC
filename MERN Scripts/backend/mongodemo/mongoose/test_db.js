//makes a collection on mongo project
require('dotenv').config({ path: '../../.env' });
var MongoClient = require('mongodb').MongoClient;
var url = process.env.ATLAS_URI;

const mongoose = require('mongoose');
  
// Set Up the Database connection
mongoose.connect(
    url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'mydb'
})

// Defining User schema
const userSchema = new mongoose.Schema(
  { name: String, age: Number }
)

// Defining User model, first arg is collection name (use lowercase+plural this is filtered somehow), second is schema
const User = mongoose.model('dogs', userSchema);

// Create collection of Model
User.createCollection().then(function (collection) {
  console.log('Collection is created!');
});