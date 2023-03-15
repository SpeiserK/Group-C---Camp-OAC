const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const crypto = require('crypto');
const { sendError, createRandomBytes } = require('./helper');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    numWood: {
        type: Number,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    givename: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User',UserSchema);

const EmployeeSchema = new mongoose.Schema ({
    Email: {
        type: String,
        required: true,
    },
    Username: {
        type: String,
        unique: true,
        required: true,
        dropDups: true 
    },
    Password: {
        type: String,
        required: true,
    },
    Location: {
        type: String,
        required: true,
    },
});
EmployeeSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "4000d"});
    return token;
};
const Employee = mongoose.model('Employee',EmployeeSchema);

const validate = (data) => {
    const schema = Joi.object({
        Email: Joi.string().email().required().label('email'),
        Username: Joi.string().required().label('Username'),
        Password: passwordComplexity().required().label('Password'),
        Location: Joi.string().required().label('Location')
    });
    return schema.validate(data);
};

const OrderSchema = new mongoose.Schema ({

    Name:  {
        type: String,
        
    },
    Quantity:  {
        type: Number,
    },
    Location:  {
        type: String,
    },
    LocationId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    LocationAddress: {
        type: String,
    },
    Datetime:   {
        type: Date,
    },
    Price: {
        type: Number,
    },
    Payment: {
        type: String,
    },
    Status: {
        type: String,
    },
    Pickup: {
        type: Boolean,
    },
    phoneNumber: {
        type: String,
    }
});

const Order = mongoose.model('Order',OrderSchema);

const LocationSchema = new mongoose.Schema ({
    Name:  {
        type: String,

    },
    Address:  {
        type: String,

    },
    Stock:  {
        type: Number,

    },
    Open:  {
        type: Boolean,

    },
    

});

const Location = mongoose.model('Location', LocationSchema);

module.exports = {
    Employee: Employee,
    validate: validate,
    Order: Order,
    Location: Location,
    User: User,
};
