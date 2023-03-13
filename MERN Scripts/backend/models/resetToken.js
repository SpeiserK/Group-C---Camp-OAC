const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require('dotenv').config();

const ResetTokenSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        expires: 3600,
        default: Date.now(),
    }
});

ResetTokenSchema.pre("save", async function (next) {
    if (this.isModified("token")) {
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hash = await bcrypt.hash(this.token, salt);
        this.token = hash;
    }

    next();
});

ResetTokenSchema.methods.compareToken = async function (token) {
    const result = await bcrypt.compareSync(token, this.token);
    return result;
};

const ResetToken = mongoose.model("ResetToken", ResetTokenSchema);
module.exports = ResetToken;