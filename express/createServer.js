var express = require("express")();

var app = express;

app.get('/', function(request, response ){
	response.send('This is page web was created by express framework.');
//	response.send('This is page web was created by express framework.');

	console.log('Request:', + request.ip);
});



var server = app.listen(8000, function(){
	console.log('Server running with port:', + server.address().port);
});