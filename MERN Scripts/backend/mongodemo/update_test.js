//update a document/s in the specified collection 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://OACgroupC:Q2NuEWhwR7ohRZOE@cluster0.mwpch7j.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: "Sydney Rd" };
    //specify which fields are updated, only specified fields will be changed, others will remain the same
    var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
    //can update multiple documents meeting the query criteria by using 'updateMany' instead of 'updateOne'
    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });