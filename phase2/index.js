// importing the express module
const express = require("express")


require("./config/database2")

// port number
const port = 2036

// putting the express in a variable or expansiating it
const app = express()

// MiddleWare that helps us capture data in json in the req.body 
app.use(express.json())


// read response from postman or backend
app.get("/", (req, res)=>{
    try {

        res.status(200).then({
            message: "i am live"
        })
        
    } catch (error) {
        res.status(404).then({
            message: error
        })
    }
})

// to listen to connections on the specified port
app.listen(port, ()=>{
    console.log("");
    console.log("Port is listening");
})