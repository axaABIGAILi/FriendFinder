/* SERVER HANDLING */

// express integration
var express = require('express');
var app = express();
// path integration
var path = require('path');
// port location
const port = 3030;
// integrate friends.js
var friends = require('./app/data/friends');

// basic listener call to activate the server
app.listen(port, function(){
    console.log(`Now listening on ${port}`);
});

console.log(friends);