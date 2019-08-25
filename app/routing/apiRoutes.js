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
   
        // user object constructor
        function userInfo (n, img, arr) {
            this.name = n;
            this.image = img;
            this.scores = [arr]
        };
        // survey onclick event
        $('#surveySub').on('click', function(){
            var n = $('#name').val();
            var img = $('#photo').val();
            var arr = [];
            for (var i=1; i <= 10; i++) {
                arr.push($('#q'+i).val());
            }
            var user = new userInfo (n, img, arr);
            // push the request body into the userData array
            userData.push(user);
        }); 
        res.json(true);
    
    });
}


