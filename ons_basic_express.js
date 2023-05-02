const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./public'));

app.get("/",(req,res)=>{
    res.send("<h1>ONS Home Page ONN</h1>");
})

app.get("/about",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./navbar-app/index.html"))
})

app.all("*",(req,res)=>{
    res.send("<h1>ONS Page not found ONN</h1>")
})
app.listen(5000,()=>{
    console.log("ONServer listens on 5000");
})