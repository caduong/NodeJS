var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Contenr-Type': 'text/html' });
    fs.readFile('demoHtml.html', function (err, data) {
        response.write(data);
        response.end();
        //console.log(data);
    });

}).listen(8080);

console.log('Server running...');
