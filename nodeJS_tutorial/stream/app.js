const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
//const gunzip = zlib.createGunzip();
/** This is a function use read and write file with big size */
const readStream = fs.createReadStream('./largefile.txt','utf8');
const writeStream = fs.createWriteStream('largefile_n.txt.gz');
readStream.pipe(gzip).pipe(writeStream); // Create file zip
// readStream.on('data',(chunk) =>{ 
//     console.log(chunk);
// });

