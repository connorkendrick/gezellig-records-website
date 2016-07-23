var express = require('express');
var app = express();
var path = require('path');
var mustache = require("mustache");
var fs = require('fs');
var mustacheExpress = require('mustache-express');

/******************************************
****** Web Application Configuration ******
******************************************/
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/assets/views');
app.use(express.static('assets'));

//middleware

app.use(function(req, res, next) {
  res.setHeader('charset', 'utf-8')
  next();
});

/******************************************
 **************** Routing *****************
 *****************************************/
app.get('/', function(req, res) {
	var view = JSON.parse(fs.readFileSync('assets/models/index.json', 'utf8'));
	var nav = JSON.parse(fs.readFileSync('assets/models/nav.json', 'utf8'));
	view["header"] = nav.links;
	view["footer"] = nav;
	res.render('index', view);
});

app.get('/artists', function(req, res) {
	var view = JSON.parse(fs.readFileSync('assets/models/artists.json', 'utf8'));
	var nav = JSON.parse(fs.readFileSync('assets/models/nav.json', 'utf8'));
	view["header"] = nav.links;
	view["footer"] = nav;
	res.render('artists', view);
});

app.get('/releases', function(req, res) {
	var view = JSON.parse(fs.readFileSync('assets/models/releases.json', 'utf8'));
	var nav = JSON.parse(fs.readFileSync('assets/models/nav.json', 'utf8'));
	view["header"] = nav.links;
	view["footer"] = nav;
	res.render('releases', view);
});

app.get('/shows', function(req, res) {
	var view = JSON.parse(fs.readFileSync('assets/models/shows.json', 'utf8'));
	var nav = JSON.parse(fs.readFileSync('assets/models/nav.json', 'utf8'));
	view["header"] = nav.links;
	view["footer"] = nav;
	res.render('shows', view);
});

app.get('/cozyclub', function(req, res) {
	var view = {};
	var nav = JSON.parse(fs.readFileSync('assets/models/nav.json', 'utf8'));
	view["header"] = nav.links;
	view["footer"] = nav;
	res.render('cozyclub', view);
});

app.get('/about', function(req, res) {
	var view = JSON.parse(fs.readFileSync('assets/models/about.json'));
	var nav = JSON.parse(fs.readFileSync('assets/models/nav.json', 'utf8'));
	view["header"] = nav.links;
	view["footer"] = nav;
	res.render('about', view);
});


/******************************************
************** Start Server ***************
******************************************/
var server = app.listen(3001, function () {

  var host = server.address().address
  var port = server.address().port

  // console.log("Gezellig Records App listening at http://%s:%s", host, port)
  console.log("Gezellig Records App listening at localhost:%s", port)

});


// var http = require('http');
//
// var server = http.createServer(app);
//
// server.listen(3000, 'localhost');
