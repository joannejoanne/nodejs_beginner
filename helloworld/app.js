// require dependencies
var express = require('express');
var http = require('http');
var path = require('path'); 

// instantiate express.js object
var app = express();

// configure express.js settings 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'jade'); 

// middleware section 
app.all('*', function (req, res) {
	res.render('index', {msg: 'welcome and hi!'}); 
}); 

// start server
http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port')); 
}); 