//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//////////////////////////////////////////////////////                  get                 ///////////////////////////////////////////////////////
app.get("/", function(req, res) {
    res.render("home");
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.get("/register", function(req, res) {
    res.render("register");
});


//////////////////////////////////////////////////                      post               ///////////////////////////////////////////////////////////////
app.post("/", function(req, res) {
    //passing data from webpage to server
    const item = req.body.newitem;
    //passing data from server to webpage
    res.redirect('/');
});

//////////////////////////////////////////////////                       port             ///////////////////////////////////////////////////////////
app.listen(3000, function() {
    console.log(`server is listening at http://localhost:3000`);
});