const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("yolo");
});

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log("server is listening");
})