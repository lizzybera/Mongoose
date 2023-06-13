const Express = require("express");
// const database = require("./config/database");

require("./config/database")

const port = 2056

const app = Express()

app.use(Express.json())

app.get("/", (req, res) =>{
    res.status(200).json({
        message: "Server is ready"
    })
})

app.listen(port, ()=>{
    console.log("")
    console.log("server is on");
})