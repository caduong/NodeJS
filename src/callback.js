// Run Async
// var fs = require('fs');

// var data = fs.readFileSync('mytext.txt');

// console.log(data.toString());

// console.log('Program end');

//---------------------------------------------------------------------
// Run Async
var fs = require('fs');

fs.readFile('mytext.txt', function(err, data){
	if(err) throw err;
	console.log(data.toString());
});
console.log('Program end');
