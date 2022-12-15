const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const Models = require("./models.js");

const app  = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const options = {
    dbName: 'mydb'
  };


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, options);
const connection = mongoose.connection;
connection.once('open',()=> {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GET requests
app.get("/",(req,res)=> {
    res.json({message: "🟢"});
    
});

app.get("/mongo", (req, res)=> {
    Models.Employee.find({ })
    .then((data) => {
        console.log( 'Employee read data available');
        res.json(data);
    })
    .catch(() => {
        console.log( 'error: ', daerrorta);
    })
});

app.get("/order", (req, res)=> {
    Models.Order.find({ })
    .then((data) => {
        console.log( 'Order read data available');
        res.json(data);
    })
    .catch(() => {
        console.log( 'error: ', daerrorta);
    })
});

app.get("/location", (req, res)=> {
    Models.Location.find({ })
    .then((data) => {
        console.log( 'Location read data available');
        res.json(data);
    })
    .catch(() => {
        console.log( 'error: ', daerrorta);
    })
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


app.use("/", require("./routes/OrderRoute.js"));
app.use("/", require("./routes/LocationRoute.js"));