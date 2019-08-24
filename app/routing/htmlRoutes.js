/* HTML ROUTES */
// path integration
var path = require('path');

// export htmlRoutes as a function
module.exports = function(app){
    // get request to send home.html by default
    app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/../public/home.html'));
    });
    // get request to send survey.html to client
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname+'/../public/survey.html'));
    });
    app.use(function(req, res){
        res.sendFile(path.join(__dirname+'/../public/home.html'));
    });
}