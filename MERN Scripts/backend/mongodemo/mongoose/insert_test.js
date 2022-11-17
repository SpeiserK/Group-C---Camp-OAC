//inserts a doc into mongo collection
var mongoose = require('mongoose')
require('dotenv').config({ path: '../../.env' });
var MongoClient = require('mongodb').MongoClient;
var url = process.env.ATLAS_URI;

//connect to db and save reference
const options = {
  dbName: 'mydb'
};
mongoose.connect("mongodb+srv://OACgroupC:Q2NuEWhwR7ohRZOE@cluster0.mwpch7j.mongodb.net/?retryWrites=true&w=majority", options);
var db = mongoose.connection;

db.once('open', function() {
  console.log("Connection Successful!");
   
  // define Schema
  const EmployeeSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true,
    },
    passWord: {
        type: String,
        required: true,
    },
});
  // compile schema to model, first arg is collection name, second is schema
  var Employee = mongoose.model('Employees', EmployeeSchema);
  // a document instance
  // save model to database
  var Employee1 = new Employee({email: 'persongmailcom', passWord: 'securepw'});
    Employee1.save(function (err, Employee) {
      if (err) return console.error(err);
      console.log(Employee.name + " saved to clients collection");
    });
     
});