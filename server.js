/* SERVER HANDLING */

// express integration
var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// path integration
var path = require('path');
// port location
const port = process.env.PORT || 3030;
// integrate routes
//require('./app/routing/apiRoutes');
require('./app/routing/htmlRoutes');

// basic listener call to activate the server
app.listen(port, function(){
    console.log(`Now listening on ${port}`);
});