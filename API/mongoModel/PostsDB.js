const mongoose=require("mongoose");

const postsDB = mongoose.Schema({
    Title: {type: String},
    UserId: {type:String},
    Desc: {type: String},
    price:{type: String},
    Type: {type: String},
    Bed: {type: String},
    Bath: {type: String},
    parking: {type: String},
    Location : {type: String},
    image : {type:String}
  });
  
  const PostDB = mongoose.model("postDB", postsDB);
  module.exports = PostDB;
  