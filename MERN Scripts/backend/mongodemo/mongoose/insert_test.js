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

    Name:  {
        type: String,
        
    },
    Quantity:  {
        type: Number,
        
    },
    Location:  {
        type: String,

    },
});
  // compile schema to model, first arg is collection name, second is schema
  var Employee = mongoose.model('orders', EmployeeSchema);
  // a document instance
  // save model to database
  
  var Employee1 = new Employee({Name: 'Fabiano@gmail.com', Quantity: 12, Location: "Kelowna Central"});
    Employee1.save(function (err, Employee) {
      if (err) return console.error(err);
      console.log(Employee.email + " saved to orders collection");
    });
     
});