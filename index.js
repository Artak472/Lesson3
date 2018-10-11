/* console.log("Hello Node");
var os = require("os");
var message = "The platform is ";

function main(){
    console.log(message + os.platform())
}

main();
*/

var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hello world");
});

app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name + "</h1>");
});

app.get("/google", function(req, res){
	var google = req.params.google
	res.send("<a href='https://www.google.com/'>" + "google" + "</a>");
});

app.get("/search", function(req, res){
	var search = req.params.search
	res.send("<a href='https://www.google.com/search?q=search value'>" + "search" + "</a>");
});

app.get("/*", function(req, res){
    res.send("404");
});

app.listen(3000, function(){
    console.log("Example is running on port 3000");
});