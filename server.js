// Links to rquired NPM packages
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true })); //<-- these two lines allow us to access req.body in a human readable format
app.use(express.json());

app.use(express.static(path.join(__dirname, '/app/public')));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

//---------------------------------------------
// LISTENER
//---------------------------------------------

app.listen(PORT, function(){
    console.log("Listening on port : " + PORT)
})