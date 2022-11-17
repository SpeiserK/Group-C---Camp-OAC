const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
import Employee from 'models.js'

const app  = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open',()=> {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});

app.get("/",(req,res)=> {
    res.json({message: "Welcome to Camp OAC app."});
});

app.get("/mongo", (req, res)=> {
    Employee.find({ })
    .then((data) => {
        console.log( 'Data', data);
        res.json(data);
    })
    .catch(() => {
        console.log( 'error: ', daerrorta);
    })
});

