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
app.use(bodyParser.json());


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
//get requests
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
    Models.Order.find(req.query)
    .then((data) => {
        console.log( 'Order read data available');
        res.json(data);
    })
    .catch(() => {
        console.log( 'error: ', daerrorta);
    })
});

app.get("/location", (req, res)=> {
    Models.Location.find(req.query)
    .then((data) => {
        console.log( 'Location read data available');
        
        res.json(data);
    })
    .catch(() => {
        console.log( 'error: ', daerrorta);
    })
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//post requests
app.post("/locupdate", (req, res) => {
    const id = req.body.id;
    const stock = req.body.stock;
    const open = req.body.open;

    if (!id||!stock||!open){
        return res.status(422).json({error:"Missing Fields"})
    }res.json("Posted successfully");

    Models.Location.findByIdAndUpdate(id, {Stock: stock, Open: open}, (err, doc) => {
        if(err) return console.log(err);
    });
});

app.post("/statuschange", (req, res) => {
    const idS = req.body.id;
    const status = req.body.status;

    if (!idS||!status){
        return res.status(422).json({error:"Missing Fields"})
    }res.json("Posted successfully");

    Models.Order.findByIdAndUpdate(idS, {Status: status}, (err, doc) => {
        if(err) return console.log(err);
    });

});


app.use("/", require("./routes/OrderRoute.js"));
//emp creation
app.use("/api/emp", require("./routes/EmpRoute.js"));
//emp auth
app.use("/api/auth", require("./routes/Auth.js"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
