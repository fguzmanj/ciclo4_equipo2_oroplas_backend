const express = require("express");
const {list, createSubasta} = require("./controller");


const router = express.Router(); 

router.route("/").get(list).post(createSubasta)


module.exports = router; 