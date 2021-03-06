var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 3000;

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/client/static"));

app.set("views", path.join(__dirname, "./client/views"));
app.set('view engine', 'ejs');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, function(){
  console.log("Running on ", port)
});
