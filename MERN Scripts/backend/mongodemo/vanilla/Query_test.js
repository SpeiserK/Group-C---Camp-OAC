require('dotenv').config({ path: '../../.env' });

var MongoClient = require('mongodb').MongoClient;
var url = process.env.ATLAS_URI;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //specify which attributes you want the query to look for, order does not matter
  var query = { address: "Highway 37", name: "Apple" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    //result is an array, each element is a document from the collection which matches the query attributes
    console.log(result);
    db.close();
  });
});