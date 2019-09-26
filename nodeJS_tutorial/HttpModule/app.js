const http = require('http');
const server = http.createServer((req,res)=>{
    // res.write('Hello world form nodejs!');
    // res.end();

    if(req.url == '/'){
        res.write('Hello world form nodejs! \n');
        res.write('This is page Home');
        res.end();
    }
    else if(req.url == '/admin'){
        res.write('This is page Admin');
        res.end();
    }
    else if(req.url == '/user'){
        res.write('This is page User');
        res.end();
    }

});

server.listen(8000);
console.log("Server running...")