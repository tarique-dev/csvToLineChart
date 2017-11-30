// set up ======================================================================
var express = require('express');
var app = express();  
var bodyParser = require('body-parser');                       // create our app w/ express
  
var port = process.env.PORT || 27017;                 // set the port
app.use(express.static('./public'));         // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json

// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
