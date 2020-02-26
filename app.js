const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(express.static("public"));



app.get("/",function(req,res)
{
	res.sendFile(__dirname+"/index.html");
});


app.get("/admin.html",function(req,res)
{
	res.sendFile(__dirname + "/admin.html");
});

app.get("/cust.html",function(req,res)
{
	res.sendFile(__dirname + "/cust.html");
});

app.get("/aboutus.html",function(req,res)
{
	res.sendFile(__dirname + "/aboutus.html");
});

app.get("/contactus.html",function(req,res)
{
	res.sendFile(__dirname + "/contactus.html");
});

app.get("/login.html",function(req,res)
{
	res.sendFile(__dirname + "/login.html");
});







app.listen(3001,function()
{
	console.log("server is ruuning on port 3001");
});