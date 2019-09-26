const express = require('express')();
const app = express;

app.get('/',(req,res)=>{
    res.send('Hello world');
});

// app.get('/admin',(req,res)=>{
//     res.send('This is page Admin!');
// });

// app.get('/user/:name/:age',(req,res)=>{
//     console.log(req.params); // get param from url request
//     console.log(req.query); 
//     /**
//      * get link query:
//      * ?tutorial=paramstutorial ~ { tutrial: 'paramstutorial' }
//      * ?tutorial=paramstutorial&sort=byage ~ { tutrial: 'paramstutorial', sort: 'byage' }
//      */
    
//     res.send(req.params.name + ":" + req.params.age);
//     //res.send('This is page User!');
// });

app.listen(8000)
console.log('Server running...');
