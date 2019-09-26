const express = require('express')();
const app = express;

app.get('/',(rep,res)=>{
    res.send('Hello world');
});

app.get('/admin',(rep,res)=>{
    res.send('This is page Admin!');
});

app.get('/user',(rep,res)=>{
    res.send('This is page User!');
});

app.listen(8000)
console.log('Server running...');