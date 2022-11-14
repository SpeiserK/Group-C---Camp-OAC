//update a document/s in the specified collection 
require('dotenv').config({ path: '../../.env' });

var MongoClient = require('mongodb').MongoClient;
var url = process.env.ATLAS_URI;

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: "Sydney Rd" };
    //specify which fields are updated, only specified fields will be changed, others will remain the same
    var newvalues = { $set: {address: "Canyon 123" } };
    //can update multiple documents meeting the query criteria by using 'updateMany' instead of 'updateOne'
    //otherwise only the first doc will be modified
    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });