const mongoose = require("mongoose");
const userSchema = require("../schema/user.schema");

const UserModal = mongoose.model("user", userSchema);

module.exports = UserModal;