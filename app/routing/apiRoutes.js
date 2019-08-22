/* API ROUTES */

// express integration
var express = require('express');
var app = express();
// path integration
var path = require('path');
// port location
const port = 3030;

// get request to return friends json object to client
app.get('/api/friends', function(req, res){
    return res.json(/* VARIABLE NAME/REFERENCE TO FRIENDS DATA */)
});

// post to handle incoming data
app.post('/api/friends', function(req, res){
    /* CODE TO HANDLE INCOMING DATA AND POST TO DATABASE + HANDLE COMPATABILITY LOGIC */
})