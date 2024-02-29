const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.DB_URI || "mongodb://0.0.0.0:27017/Citas"
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: false
    })  .then((res) => console.log("db is connected"))
    .catch((err) => console.error(err));
}

module.exports = dbConnect