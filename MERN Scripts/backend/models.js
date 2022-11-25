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
module.exports = User;

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
module.exports = Employee;

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
});

const Order = mongoose.model('Order',OrderSchema);
module.exports = Order;


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
module.exports = Location;

module.exports = {
    Employee: Employee,
    Order: Order,
};
