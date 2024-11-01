console.log("Server file is running ");

function addtwonumber(a,b){
    return a+b;
}
var result = addtwonumber(4,4);
console.log(result);

// ArrowFunction

const addtwonumber = (a,b) =>{
    return a+b;
}
var result = addtwonumber(4,4);
console.log(result);

const addtwonumber =(a,b) => a+b;

callbackfunction
function callbackfunction(){
    console.log("Am a Callbackfunction");
}

const addtwonumber = (a,b) =>{
    console.log(a+b);
    callbackfunction();
}
addtwonumber(2,3);


const { log } = require('console');
var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user.username)


// For creating a File
fs.appendFile('greeting.text',user.username + '!', ()=>{
    console.log('file is created');
});

const notes = require('./notes.js');
console.log("NodeserverOpen");
