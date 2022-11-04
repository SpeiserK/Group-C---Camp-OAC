var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://OACgroupC:Q2NuEWhwR7ohRZOE@cluster0.mwpch7j.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("clients", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});