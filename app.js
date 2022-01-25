//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

////////////////////////////////////////////////////////--------------database              //////////////////////////////////////////////////////////////////////////////////////////
//mongodb connection 
mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });

//mongoose schema for items
const userSchema = ({
    email: String,
    password: String
});

//mongoose model
const modelUser = mongoose.model("User", userSchema);



//////////////////////////////////////////////////////                  get                 ////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/", function(req, res) {
    res.render("home");
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.get("/register", function(req, res) {
    res.render("register");
});


//////////////////////////////////////////////////                      post               //////////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/register", function(req, res) {
    const newUser = new modelUser({
        email: req.body.username,
        password: req.body.password
    });
    newUser.save(function(err) {
        if (err) {
            console.log(err)
        } else {
            res.render("secrets"); //there is no forward slash cuz we dont want to render unless the user registers
        }
    })

});

app.post("/login", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    //to look thru our collection of users 
    //where our email field(where our db is there) is matching with our username field(from the user whoxz trying to login)
    modelUser.findOne({ email: username }, function(err, foundUser) {
        if (err) {
            console.log(err)
        } else {
            if (foundUser) {
                if (foundUser.password === password) {
                    res.render("secrets");
                }
            }
        }
    });
});



//////////////////////////////////////////////////                       port             ///////////////////////////////////////////////////////////
app.listen(3000, function() {
    console.log(`server is listening at http://localhost:3000`);
});