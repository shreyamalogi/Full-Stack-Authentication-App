//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
//https://www.npmjs.com/package/express-session
const session = require('express-session');
//https://www.passportjs.org/tutorials/password/
const passport = require("passport");
//https://www.npmjs.com/package/passport-local-mongoose
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

//sessions from express sessions
app.use(session({
    secret: 'our little secret',
    resave: false,
    saveUninitialized: false,
}))

//passport.js explicit code
app.use(passport.initialize());
app.use(passport.session());


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

////////////////////////////////////////////////////////--------------database  and encryption            //////////////////////////////////////////////////////////////////////////////////////////
//mongodb connection 
mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });

//mongoose schema for items, in which the object is created from mongoose schema class
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

//passport plugin 
userSchema.plugin(passportLocalMongoose);

//mongoose model
const modelUser = mongoose.model("User", userSchema);

//passport config
passport.use(modelUser.createStrategy());

passport.serializeUser(modelUser.serializeUser());
passport.deserializeUser(modelUser.deserializeUser());




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


app.get("/secrets", function(req, res) {
    if (req.isAuthenticated) {
        res.render("secrets");
    } else {
        res.redirect("/login");
    }

});


app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


//////////////////////////////////////////////////                      post               //////////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/register", function(req, res) {
    //passport js code
    modelUser.register({ username: req.body.username }, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secrets")
            });
        }
    });

});



app.post("/login", function(req, res) {

    const user = new modelUser({
        username: (req.body.username),
        password: (req.body.password)
    })

    //passport js login 
    req.login(user, function(err) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secrets");
            });
        }

    });
});





//////////////////////////////////////////////////                       port             ///////////////////////////////////////////////////////////
app.listen(3000, function() {
    console.log(`server is listening at http://localhost:3000`);
});