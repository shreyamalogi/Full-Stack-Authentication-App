//jshint esversion:6

//////////////////////////////////////////////////////////////////require the packages ///////////////////////////////////////////////////////////////////////////////////////////////////////////

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const env = require("dotenv").config();
const mongoose = require("mongoose");
//https://www.npmjs.com/package/express-session
const session = require('express-session');
//https://www.passportjs.org/tutorials/password/
const passport = require("passport");
//https://www.npmjs.com/package/passport-local-mongoose
const passportLocalMongoose = require("passport-local-mongoose");
//https://www.passportjs.org/packages/passport-google-oauth20/
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//https://www.npmjs.com/package/mongoose-findorcreate
const findOrCreate = require('mongoose-findorcreate')

const app = express();

///////////////////////////////////////////////////////////                 app.use and app.set explicit codes         /////////////////////////////////////////////////////////////////////////////////////////////


//sessions from express sessions
app.use(session({
    secret: 'our little secret',
    resave: false,
    saveUninitialized: false,
}))

//passport.js explicit code
app.use(passport.initialize());
app.use(passport.session());

//ejs 
app.set('view engine', 'ejs');

//expressjs 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

////////////////////////////////////////////////////////--------------         database, plugins  and encryption            //////////////////////////////////////////////////////////////////////////////////////////
//mongodb connection 
mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });

//mongoose schema for items, in which the object is created from mongoose schema class
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String
});

//passport plugin 
userSchema.plugin(passportLocalMongoose);
//find o create plugin 
userSchema.plugin(findOrCreate);

//mongoose model
const modelUser = mongoose.model("User", userSchema);

//passport config
passport.use(modelUser.createStrategy());

//passport js serialize and deserailize
passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
        cb(null, { id: user.id, username: user.username });
    });
});

passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

//GOOGLE OAUTH2.0
passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/secrets",
        userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo" //got this from github issues
    },
    function(accessToken, refreshToken, profile, cb) {
        console.log(profile);

        modelUser.findOrCreate({ googleId: profile.id }, function(err, user) {
            return cb(err, user);
        });
    }
));


//////////////////////////////////////////////////////                  get                 ////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/", function(req, res) {
    res.render("home");
});


app.get('/auth/google',
    passport.authenticate('google', { scope: ["profile"] })
); //pop up ,,,,use passport to authenticate our user for google stratedgy

app.get('/auth/google/secrets',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/secrets');
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