// importing mongoose
const mongoose = require("mongoose")

// mongodb port/url/endpoint
const dataBasePort = "mongodb://0.0.0.0:27017/lizDB"

const myDataBase= async () =>{
    try {
        // connecting to mongodb
    const datadb = await mongoose.connect(dataBasePort)

    console.log("");

    //  showing console if database is connected
    console.log(`follow me on ${datadb.connection.host}`)

    } catch (error) {
        // to show or help us identify if an error occured
        console.log("an error has occured");
    }
}

module.exports = myDataBase()