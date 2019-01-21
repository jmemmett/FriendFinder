//-------------------------------------------------
// This file should contain 2 routes
//-------------------------------------------------

// Linking to the friends file, which is where the full list of possible friends is being stored in an array.
var friends = require('../data/friends');

module.exports = function (app) {
    
    // This GET route should should return all possible friends (as JSON objects) to be displayed on the front-end.
    app.get('/api/friends', function(req, res){
        res.send(friends);
    })

    // This POST route will be used to handle incoming survey results and compatibility logic.
    app.post('/api/friends', function(req, res) {
        // friends.push(req.body); //<-- This is working, but it's not required.
        // console.log(req.body.scores[0]); //<-- this is working
        // Need logic here to compare the information just stored into the array.
        var closestMatch = [];
        var matchScore = 100;
        
        for (var i = 0; i < friends.length; i++) { //<-- Loop through the list of potential friends.
            var difference = 0; //<-- initialize 'difference' variable at zero
            for (var j = 0; j < friends[i].scores.length; j++) { //<-- Loop through the answers of each potentital friend.
                if (friends[i].scores[j] !== parseInt(req.body.scores[j])) { // If the these two values are different
                    difference += Math.abs(friends[i].scores[j] - parseInt(req.body.scores[j]));
                }
            }

            // After looping through each potential friend's survey answers...
            if (difference < matchScore) { //<-- if this potential friend's answers are closer to the user's...
                closestMatch.unshift(friends[i]); //<-- put this potential friend at the front of the closestMatch array...
                matchScore = difference; //<-- and set matchScore to this new low difference score.
                console.log("New closest match: " + closestMatch[0].name);
            };

            console.log(difference); //<-- displaying the score difference of each array member
            console.log(matchScore);
        };

        console.log("New friend suggestion: " + closestMatch[0].name);
        res.send(closestMatch[0]);
    })
};