var http = require("http"); // import Module http

http.createServer(function (request, response) {
    response.writeHead(200,{'Content-Type':'text/plain'});// text/html

    response.end('Hello World');

}).listen(8000);

console.log('Server running ai http://192.168.129.14:8000 or http://localhost:8000');