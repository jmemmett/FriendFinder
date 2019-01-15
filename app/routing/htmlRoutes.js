var express = require('express');
var app = express();
var path = require('path');

// This route should result in responding to the front-end with the survey.html page.
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'))
})

// This route should be a CATCH-ALL route that responds to the front-end with the home.html page.
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/../public/home.html'))
})

module.exports =  app;