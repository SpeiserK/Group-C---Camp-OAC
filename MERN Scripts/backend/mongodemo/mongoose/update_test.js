//update a document/s in the specified collection 
require('dotenv').config({ path: '../../.env' });

var MongoClient = require('mongodb').MongoClient;
var url = process.env.ATLAS_URI;
//work in progress