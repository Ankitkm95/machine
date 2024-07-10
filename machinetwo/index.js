const express = require("express");
const connect = require("./config/db");
const userRouter = require("./routes/user.route");

const app = express();

app.use(express.json());

app.get("/", (req, res)=> {
    res.status(200).send({"msg": "Hello World"});
})

app.use("/user", userRouter)

app.listen(8080,async ()=>{
    try {
        await connect();
        console.log("db is connected");
    } catch (err) {
        console.log("connection to db is failed")
    }

    console.log("app is running on port 8080")
})