const mongoose = require("mongoose");
const dbConnect = () => {
    const connectionParams = { useNewUrlParser: true };
    mongoose.connect(process.env.MONGO_URL, connectionParams);
    mongoose.connection.on("Connected", () => {
        console.log("Connected to Db sucessfully");
    })
    mongoose.connection.on("error", (err) => {
        console.log("Error while connected to Db" + err);
    })
}
exports.module = dbConnect