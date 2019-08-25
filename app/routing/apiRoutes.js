/* API ROUTES */

// require friends data
var friends = require('../data/friends');

// empty array for user data
var userData = [];

// export API routes methods
module.exports = function(app) {
    
    // get request to return friends json object to client
    app.get('/api/friends', function(req, res){
        return res.json(friends.friends)
    });

    // post to handle incoming data
    app.post('/api/userData', function(req, res){
        /* CODE TO HANDLE INCOMING DATA AND POST TO DATABASE + HANDLE COMPATABILITY LOGIC*/        

        // totalDiff high value default for comparison updating purposes
        var totalDiff = 1000;

        // variables to store name and image
        var friendName = '';
        var friendImg = '' ;   

        // easier way to refer to the latest user added to userData object array
        var currentUser = userData[userData.length-1]
            // for loop to loop through the friends array
        for (let j=0; j < friends.length; j++) {
            var difference = 0;
                // for loop to loop through scores key of particular iteration of friends object array
                for (let i=0; i < friends[j].scores.length; i++) {
                    // defines index value in comparisonArray as specified score iteration of the specified friend object in the friends array 
                    difference += Math.abs(friend[j].scores[i] - currentUser.scores[i])
                }
                // check current added up difference to previous
                if (difference < totalDiff) {
                    totalDiff = difference
                    friendName = friends.friends[i].name;
                    friendImg = friends.friends[i].photo;
                };
            }
    res.json(true);
    })
}