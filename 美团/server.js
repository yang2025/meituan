const express = require("express")
const  app= express();
const bodyParser=require("body-parser")
const index = require("./index.js")
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
// app.use('/public',express.static('public'))
//跨域
app.all("*",function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();  
});
app.use(bodyParser.urlencoded({
    extended: false
}))
app.listen("8000",()=>{
	console.log("欢迎访问美团")
})

app.use("/",index)