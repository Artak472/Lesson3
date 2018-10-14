/* 
console.log("Hello Node");
var os = require("os");
var message = "The platform is ";

function main(){
    console.log(message + os.platform())
}

main();
*/

/*
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
*/

/*
var Square = require("./module");
var mySquareObject = new Square(5);

function main() {
   console.log(mySquareObject.getArea());
}
main();
*/

/*
var fs = require('fs');

function main(){
    var file = "hello.txt";
    fs.appendFileSync(file, "Hello world\n");
}
main();
*/

/*
var fs = require('fs');

function main(){
   fs.writeFile("hello.txt", "Hello world\n", function(err){
       console.log("fs.writeFile ended");
   });
   console.log("fs.writeFile");
}
main();
*/

/*
var fs = require('fs');

function main() {
   fs.writeFileSync("hello.txt", "Hello world\n");
   console.log("fs.writeFile");
}
main();
*/

/*
var fs = require('fs');
var dummyText = "Apple yep";

function main(){
    fs.writeFileSync("dummytext.txt", dummyText);
    var text = fs.readFileSync("dummytext.txt").toString();
    console.log(dummyText == text);
    console.log(text);
    fs.writeFileSync("undummytext.txt",
        text.replace("Apple", "Microsoft")
    );
}
main();
*/

var obj = {
    "first_name": "Artak",
    "last_name": "Engibaryan",
    "age": 17,
    "tumo_student": true
}

var myJSON = JSON.stringify(obj);

var fs = require('fs');

function main() {
   fs.writeFileSync("obj.json", myJSON);
   console.log("fs.writeFile");
}
main();