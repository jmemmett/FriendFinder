// Links to rquired NPM packages
var express = require("express");
var path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// I wrote these next two lines with my tutor, but I think he was only trying to accomplish what I've got below (taken from our class-room examples) in the ROUTIN section...
// var htmlRoutes = require('./app/routing/htmlRoutes');
// var apiRoutes = require('./app/routing/apiRoutes');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true })); //<-- these two lines allow us to access req.body in a human readable format
app.use(express.json());

//---------------------------------------------
// ROUTING
//---------------------------------------------
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//---------------------------------------------
// LISTENER
//---------------------------------------------

app.listen(PORT, function(){
    console.log("Listening on port : " + PORT)
})