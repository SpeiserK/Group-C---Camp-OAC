const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodeMailer = require('nodemailer');
require('dotenv').config();
const Models = require("./models.js");
const pino = require('express-pino-logger')();

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const app  = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);


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

//Nodemailer functions
let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

transporter.verify((err, success) =>{
    err
        ? console.log(err)
        : console.log(`== Server is  ready to take messages: ${success} ===`)
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

app.get("/employee", (req, res)=> {
    Models.Employee.find({ })
    .then((data) => {
        //console.log( 'Employee read data available');
        res.json(data);
    })
    .catch(() => {
        console.log( 'error: ', daerrorta);
    })
});

app.get("/orderCust", (req, res)=> {
    Models.Order.find(req.query)
    .then((data) => {
        console.log( 'Order read data available');
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
    try {
        const id = req.body.id;
        const stock = req.body.stock;
        const open = req.body.open;
        if (!id||!stock||typeof open !== typeof true){
            return res.status(422).send({message:"Missing/Bad field types"});
        }res.status(200).send({message: "Posted successfully"});

        Models.Location.findByIdAndUpdate(id, {Stock: stock, Open: open}, (err, doc) => {
            if(err) return console.log(err);
        });
    } catch (error) {
        res.status(500).send({message: "Location update failed, internal server error"});
    }
});

app.post("/adminlocupdate", (req, res) => {
    try {
        const id = req.body.id;
        const name = req.body.name;
        const address = req.body.address;
        const stock = req.body.stock;
        const open = req.body.open;
        if (!address||!name||!id||!stock||typeof open !== typeof true){
            return res.status(422).send({message:"Missing/Bad field types"});
        }res.status(200).send({message: "Posted successfully"});

        Models.Location.findByIdAndUpdate(id,
            {Name: name, Address: address, Stock: stock, Open: open},
            (err, doc) => {
            if(err) return console.log(err);
        });
    } catch (error) {
        res.status(500).send({message: "Location update failed, internal server error"});
    }
});

//status change post request
app.post("/statuschange", (req, res) => {
    const idS = req.body.id;
    const status = req.body.status;
    const pickup = req.body.pickup;
    const quantity = req.body.quantity;
    const location = req.body.location;
    const date = req.body.date;
    const price = req.body.price;
    const email = req.body.email;

    if (!idS||!status || !pickup){
        return res.status(422).json({error:"Missing Fields"})
    }res.json("Posted successfully");

    Models.Order.findByIdAndUpdate(idS, {Status: status, Pickup: pickup}, (err, doc) => {
        if(err) return console.log(err);
    });

    //email strings, to be used as email inputs
    let emailSub = "";
    let emailContent = "";
    let emailAdd = "";

    //set email parameters with custom location address
    if(status == "Approved"){
        emailSub = "Your firewood order has been approved.";
        switch(location){
            case "Rutland":
                emailAdd = "Rutland address";
                break;
            case "West Kelowna":
                emailAdd = "West K address";
                break;
            case "Mission":
                emailAdd = "Mission address";
                break;
            case "Lake Country":
                emailAdd = "Lake Country address";
                break;
            case "Glenmore":
                emailAdd = "Glenmore address";
                break;
            case "Central Kelowna":
                emailAdd = "Central K address";
                break;
            default:
                emailAdd = "DEFAULT";
        }
        emailContent = "Hello,\n\nYour order for "+quantity+" fire wood bundle(s) has been approved for $"
        +price+" CAD.\nYour pickup address will be "+emailAdd+", your order will be available for pickup until "
        +date+"at CLOSING TIME (PST).\n\nThanks for your support,\nKelowna Rotary Club and Camp OAC";
    }else{
        emailSub = "Your firewood order has been denied.";
        emailContent = "Hello,\n\nWe are sorry to inform you that your firewood has been cancelled.\n\nThanks"
        +" for your support,\nKelowna Rotary Club and Camp OAC ";
    }

        let mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,          //will replace with email const
            subject: emailSub,
            text: emailContent,
        };
        
        transporter.sendMail(mailOptions, function (err, data) {
            if(err){
                console.log("Error"+err);
            } else{
                console.log("Email sent successfully");
            }
        });
});

app.post("/deleteuser", (req, res) => {
    const id = req.body.id;
    console.log(id);
    if (!id){
        return res.status(422).json({error: "Missing Fields"})
    }res.json("Posted successfully");
    console.log("test2");
    Models.Employee.findByIdAndDelete({ _id: id}).exec();
    console.log("test3");
    
});

app.post('/api/messages', (req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
  
  });

app.use("/charge", require("./routes/api/charge.js"));

app.use("/", require("./routes/OrderRoute.js"));
//emp creation
app.use("/api/emp", require("./routes/EmpRoute.js"));
//emp auth
app.use("/api/auth", require("./routes/Auth.js"));
