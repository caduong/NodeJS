var express = require("express")();

var app = express;

app.get('/', function(request, response ){
	response.send('<h1>This is page web was created by express framework</h1><a href = "/admin">Admin page</a>');

	console.log('Request:', + request.ip);
});

app.get('/admin', function(request, response){
	response.send('This is page Admin!');
});

var server = app.listen(8000, function(){
	console.log('Server running with port:', + server.address().port);
});