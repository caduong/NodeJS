var express = require('express')()

var app = express;
var admin = express;

app.get('/', function(request,response){

	
	response.send('This is my website.')
	
});
app.listen(8000)

// console.dir(app.locals.title)
// console.dir(app.locals.email)
console.log('Server running...')