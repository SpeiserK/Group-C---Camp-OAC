//inserts a doc into mongo collection

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://OACgroupC:Q2NuEWhwR7ohRZOE@cluster0.mwpch7j.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  
  //db name
  var dbo = db.db("mydb");
  //can specify an array if multiple objects are to be inserted simultaneously, also need to use 'insertMany', instead of 'insertOne'
  var myobj = { name: "Microsoft", address: "Sydney Rd" };
  
  //collection name
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});