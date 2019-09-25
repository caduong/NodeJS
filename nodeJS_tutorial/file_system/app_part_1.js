const fs = require('fs');
/** Create a File */
// fs.writeFile('exampleCreate.txt','This is an content',(err) => {  // Create a file
//     if(err)
//         console.log(err);
//     else
//         console.log('File successfully create!');
//         fs.readFile('exampleCreate.txt','utf8',(err,file) => { // Read a file with fontmat is 'utf8'
//             if(err)
//                 console.log(err);
//             else
//                 console.log(file);
//         });
// });

/** Rename a File */
// fs.rename('exampleCreate.txt','example.txt',(err) =>{   // Rename a file
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully renamed the file!')
// });
//------------------------------------------------------------------------------------------------------

/** Add data a File */
// fs.appendFile('exampleCreate.txt',' /n add data content!!!',(err) =>{ // add dada to file
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully appended data to file!.')
// });
//------------------------------------------------------------------------------------------------------

/** Delete a File */
// fs.unlink('example.txt',(err) => { // delete a file
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully delete a file!.')
// });