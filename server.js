//jshint eversion:6

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contat me at: johndoe@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("My name is John Doe");
});

app.get("/hobbies", function (req, res) {
  res.send("Code, Gym, Hikes");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
