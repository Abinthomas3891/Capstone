const mongoose=require("mongoose");

const userDB = mongoose.Schema({
    username: {type: String, default: null},
    Phone: {type: String},
    email: {type: String, unique: true},
    Password: {type: String},
    token: {type: String}
  });
  
  const UserDB = mongoose.model("userDB", userDB);
  module.exports = UserDB;
  