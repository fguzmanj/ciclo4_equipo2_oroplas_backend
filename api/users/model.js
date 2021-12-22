const mongoose = require("mongoose"); 
const collection = "users";

const userSchema =  {
    name: {type: String, required: true},
    pseudonym: {type: String},
    birthdate: {type: Date, required: true},
    active: {type: Boolean, required: true, default: true},
}

const options = {
    timestamps: true, 
}

const Schema = new mongoose.Schema(userSchema, options);

const User = mongoose.model(collection, Schema); 

module.exports = User; 