const http = require('http');
const fs = require('fs');

const server = http.createServer((rep,res)=>{
    const readStream = fs.createReadStream('./example.png');
    res.writeHead(200,{'Content-type':'image/png'});
    //res.writeHead(200,{'Content-type':'application/json'});
    //res.writeHead(200,{'Content-type':'text/htlm'});
    readStream.pipe(res);
});
server.listen(8000);
console.log('Server running...')
