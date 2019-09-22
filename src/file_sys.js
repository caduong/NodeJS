var fs = require('fs');

//-------------------- Open file ---------------------------------------

// var http = require('http');

// http.createServer(function (request, response) {
//     response.writeHead(200, { 'Contenr-Type': 'text/html' });
//     fs.readFile('demoHtml.html', function (err, data) {
//         response.write(data);
//         response.end();
//         //console.log(data);
//     });

// }).listen(8080);

// console.log('Server running...');o

//-------------------- Create file ---------------------------------------

fs.appendFile('mytext.txt','Hello world',function(err){
    if (err) throw err;

    console.log('saved!');
    f
});

