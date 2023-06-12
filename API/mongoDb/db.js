const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = async () => {
    try {
        mongoose.connect(
            "mongodb+srv://onthego:12345@onthego.nal2bd5.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,

                useUnifiedTopology: true,
            },
            (error) => {
                if (error) {
                    console.log("MongoDB is not connected");
                } else {
                    console.log("MongoDB is connected");
                }
            }
        );
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
};

module.exports = mongoDB;
