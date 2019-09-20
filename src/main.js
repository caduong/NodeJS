var http = require("http"); // import Module http

http.createServer(function (request, response) {
    response.writeHead(200,{'Content-Type':'text/plain'});// text/html

    if (request.url == '/') {
        response.writeHead(200,{'Content-Type':'text/plain'});// text/html
        response.write('Page Home');
        response.end();
    }

    else if (request.url == '/student') {
        response.writeHead(200,{'Content-Type':'text/plain'});// text/html
        response.write('Page student');
        response.end();
    }

    else if (request.url == '/admin') {
        response.writeHead(200,{'Content-Type':'text/plain'});// text/html 
        response.write('Page admin');
        response.end();
    }
    
    else {
        response.writeHead(200,{'Content-Type':'text/plain'});// text/html
        response.write('Invalid Request!');
        response.end();
    }

    //response.end('Hello World');

}).listen(8000);

console.log('Server running ai http://192.168.129.14:8000 or http://localhost:8000');