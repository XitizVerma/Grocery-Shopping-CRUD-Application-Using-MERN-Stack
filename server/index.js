const express = require("express"); 
const app = express(); 
const bodyParser = require("body-parser");



app.get("/", function(req, res) { 
    res.send("Thank You for calling!"); 
}); 

app.listen(3001, function() {

    console.log("Running on port 3001");

});