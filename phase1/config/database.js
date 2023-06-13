const mongoose =require("mongoose")

const set07DB = "mongodb://0.0.0.0:27017/set07Database"
// const set07DB = "mongodb://127.0.0.0:27017/set07Database"
// const set07DB = "mongodb://localhost/set07Database"

const Database = async()=>{
    try {

        const dataConnect = await mongoose.connect(set07DB)
        console.log("");
        console.log(`Database is connected to ${dataConnect.connection.host}`);
        
    } catch (error) {
        console.log("An error occured in connecting database", error);
    }
}

module.exports = Database()