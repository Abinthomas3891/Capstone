const mongoose=require("mongoose");

const postsDB = mongoose.Schema({
    Type: {type: String,},
    BHK: {type: String,},
    Description: {type: String},
    Rent : {type: Number}
  });
  
  const PostDB = mongoose.model("postDB", postsDB);
  module.exports = PostDB;
  