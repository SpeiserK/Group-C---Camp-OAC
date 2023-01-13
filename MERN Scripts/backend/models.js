const mongoose = require('mongoose');

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
    email: {
        type: String,
        required: true,
    },
    passWord: {
        type: String,
        required: true,
    },
});

const Employee = mongoose.model('Employee',EmployeeSchema);

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
    Datetime:   {
        type: Date,
    },
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
    Order: Order,
    Location: Location,
    User: User,
};
