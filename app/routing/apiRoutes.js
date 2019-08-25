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

        // compare userData to friends
        function showFriend (){
            // empty array of compared scores
            var comparisonArray = [];
            // easier way to refer to the latest user added to userData object array
            var currentUser = userData[userData.length-1]
            // for loop to loop through the friends array
            for (let j=0; j < friends.length; j++) {
                // for loop to loop through scores key of particular iteration of friends object array
                for (let i=0; i < friends[j].scores.length; i++) {
                    // defines index value in comparisonArray as specified score iteration of the specified friend object in the friends array 
                    comparisonArray[i] = friend[j].scores[i] - currentUser.scores[i]
                    // swaps sign of number to assure it is positive if negative
                    if (Math.sign(comparisonArray[i]) === -1) {
                        comparisonArray[i] = comparisonArray[i]*-1
                }
            }
        }
    
    }
}