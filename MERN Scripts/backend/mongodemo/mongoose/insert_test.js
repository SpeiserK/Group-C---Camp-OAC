//inserts a doc into mongo collection
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
  var BookSchema = mongoose.Schema({
    name: String,
    age: Number
  });
  // compile schema to model, first arg is collection name, second is schema
  var Book = mongoose.model('dogs', BookSchema);
  // a document instance
  var book1 = new Book({ name: 'John Smith', age: 12});
  // save model to database
    book1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(book.name + " saved to clients collection");
    });
     
});