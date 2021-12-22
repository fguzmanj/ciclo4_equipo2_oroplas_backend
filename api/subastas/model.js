const mongoose = require("mongoose"); 

const collection = "subasta";

const subastasSchema =  {
    name: { type: String, required: true },
    published_date: { type: Date },
    //author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    description: {type: String, required: true},
}

const options = {
    timestamps: true, 
}

const Schema = new mongoose.Schema(subastasSchema, options);

const Subastas = mongoose.model(collection, Schema); 

module.exports = Subastas; 