const mongoose = require("mongoose");

const postsDB = mongoose.Schema({
    Title: { type: String },
    Desc: { type: String },
    price: { type: String },
    Type: { type: String },
    Bed: { type: String },
    Bath: { type: String },
    parking: { type: String },
    Location: { type: String },
    image: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the User model
    createdOn: { type: Date, default: Date.now }
});

const PostDB = mongoose.model("postDB", postsDB);
module.exports = PostDB;
