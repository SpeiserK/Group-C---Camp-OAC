//makes a collection on mongo project
require('dotenv').config({ path: '../../.env' });

var MongoClient = require('mongodb').MongoClient;
var url = process.env.ATLAS_URI;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("clients", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});