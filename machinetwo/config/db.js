const mongoose = require("mongoose");

const connet = mongoose.connect("mongodb://127.0.0.1:27017/machine");

module.exports = connet;