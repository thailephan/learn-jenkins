const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
    res.json("Update message");
})

app.get("/meme", (req, res) => {
    res.json("Back meme");
})

app.get("/features", (req, res) => {
    res.json({
        success: true,
        data: {
            id: 1,
            name: "Add shop voucher",
        }
    });
})

app.listen(3001, () => {
    console.log("Server is running");
})


// 1.1) Build docker for project and running in remote-aws
// 1.2) Run with pm2
// 2) Send email for each success
