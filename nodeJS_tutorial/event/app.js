const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1, num2) =>{
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name) {
        super();
        this._name = name;
    }

    get name(){
        return this._name;        
    } 
    // set name(val) {
    //     this._name = val;
    // }
}

let predro = new Person('Pedro');

let asdasdasd = new Person('asdasdasd');

//var predro = new Person();

predro.on('name',()=>{
    //predro._name = data;
    console.log('My name is ' + predro.name);
});

asdasdasd.on('name',()=>{
    //predro._name = data;
    console.log('My name is ' + asdasdasd.name);
});


predro.emit('name');
asdasdasd.emit('name');