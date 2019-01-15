// This file should contain 2 routes:
    // A GET route with the url /api/friends. This will be used to display JSON of all possible friends
    // A POST route /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var express = require('express');
var app = express();

var friends = require('../data/friends');

app.get('/', function(req, res){
    res.send(friends);
})

app.post('/friend', function(req, res) {
    console.log(req.body)
    res.send('Added Friend')
})

module.exports = app;