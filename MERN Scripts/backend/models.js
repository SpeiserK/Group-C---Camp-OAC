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

