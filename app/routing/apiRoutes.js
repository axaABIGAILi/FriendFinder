/* API ROUTES */

// require friends data
var friends = require('../data/friends');

// export API routes methods
module.exports = function(app) {
    
    // get request to return friends json object to client
    app.get('/api/friends', function(req, res){
        return res.json(friends.friends)
    });

    // post to handle incoming data
    /*app.post('/api/friends', function(req, res){
        /* CODE TO HANDLE INCOMING DATA AND POST TO DATABASE + HANDLE COMPATABILITY LOGIC

    });*/
}


