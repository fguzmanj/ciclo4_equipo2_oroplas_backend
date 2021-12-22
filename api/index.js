const express = require("express");
const users = require("./users/router"); 
const subastas = require("./subastas/router");

const api = express();

api.use("/users", users)
api.use("/subastas", subastas)

module.exports = api;