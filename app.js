const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
    res.json("Oke");
})

app.listen(3001, () => {
    console.log("Server is running");
})


// 1.1) Build docker for project and running in remote-aws
// 1.2) Run with pm2
// 2) Send email for each success
