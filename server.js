//going to node module express and setting variable express equal to the folder
var express= require("express"); 
//call express as a fuction and set it equal to variable app
var app= express();

//app is object, get is function, / means home website, first parameter the get function takes is where the URL is going
//when user goes to local host 3000, browser sends /, server runs this function (console log shows up in Terminal) 
//res is needed for server to send something back to browser 
app.get("/", (req,res) => {
    console.log("index.html hit")
    //dirname dignifies this directory name, /public tells server to go to local public folder, take index.htmal file and sending it to browser
    res.sendFile(__dirname + "/public/index.html")
})
app.get("/style.css", (req,res) => {
    console.log("style.css hit")
    res.sendFile(__dirname + "/public/style.css")
})
app.get("/script.js",(req,res)=>{
    console.log('script.js hit.')
    res.sendFile(__dirname + "/public/script.js");
})

//telling us in the server that we are using local host 3000
console.log("Starting server on 3000");
//we have express defined, we want our server listening to port 3000 to check for pings from users
app.listen(3000)