const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");

const connection = mysql.createConnection({
  name: "localhost",
  host: "127.0.0.1",
  user: "root",
  password: "12345678",
  database: "cruddatabase",
  port: 3306,
  charset: "utf8mb4"
});
//npm run devStart to start server
app.use(express.json);
app.use(bodyParser.urlencoded({ extended: true }));


connection.connect(err => {
  if (!err) {
    console.log("DB Connection Succeeded");
  } else {
    console.log("DB Connection Failed");
  }
});

//displays message in command line
//Webseries is the table name 
//webseriesName and webseriesRating are the column attributes

app.post("/api/insert", function (req, res) {

  const webseriesName = req.body.webseriesName;
  const webseriesRating = req.body.webseriesRating;


  const InsertSql = "INSERT INTO webseriesreview (webseriesName , webseriesRating) VALUES ( 'My Love From the Star', 'Best Webseries');"
  connection.query(InsertSql, [webseriesName, webseriesRating], (err, result) => {
    console.log(result);
  });
});

app.delete('/api/delete/:webseriesName',(req,res) => {
  const name = req.params.webseriesName;
  const Deletesql = "DELETE FROM webseriesreview WHERE webseriesName = ?";

  connection.query(Deletesql,name,(err,result) => {
    if (err)
    console.log(err);
  })
})

app.put('/api/update',(req,res) => {
  const name = req.body.webseriesName;
  const rating =req.body.webseriesRating;
  const Updatetesql = "UPDATE webseriesreview SET webserieesRating = ? WHERE webseriesName =?";

  connection.query(Updatetesql,[rating,name],(err,result) => {
    if (err)
    console.log(err);
  })
})



app.listen(3001, function () {

  console.log("Running on port 3001");

});