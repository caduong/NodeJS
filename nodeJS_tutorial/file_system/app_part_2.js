const fs = require('fs');

/** Create Folder and file into folder it.*/
// fs.mkdir('tutorial', (err)=>{ // create a folder and create a file with content ....
//     if(err)
//         console.log(err);
//     else {
//         //console.log('Folder successfully create!');
//         fs.writeFile('./tutorial/example_1.txt','This is a content in file example 1!',(err) =>{
//             if(err)
//                 console.log(err);
//             else {
//                 console.log('Successfully create file example 1!');
//             }     
//         });
//     }
// });

/** Remove Folder */
// fs.rmdir('tutorial', (err)=>{ // Delete a folder
//     if(err)
//         console.log(err);
//     else {
//         console.log('Successfully deleted the folder!');
//     }
// });

/** Remove Folder and file into Folder it */
// fs.unlink('./tutorial/example.txt',(err) =>{
//     if(err)
//         console.log(err);
//     else{
//         fs.rmdir('tutorial',(err)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log('Successfully deleted Folder and file in it!')
//             }
//         });
//     }

// });

/** Remove all file have in folder. */
fs.readdir('tutorial',(err,files)=>{
    if(err)
        console.log(err);
    else{
        console.log(files);
        for(let file of files) {
            fs.unlink('./tutorial/' + file,(err)=>{
                if(err)
                    console.log(err);
                else{
                    console.log('Deleted file' + file);
                }
            });
        }
    }
    
});