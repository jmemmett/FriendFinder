//-------------------------------------------------
// This file should contain 2 routes
//-------------------------------------------------

var path = require("path");

module.exports =  function(app) {

    // This GET route will respond to the front-end with the survey.html page when hit.
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'))
    })

    // This route should be a CATCH-ALL route that responds to the front-end with the home.html page.
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'))
    })
};