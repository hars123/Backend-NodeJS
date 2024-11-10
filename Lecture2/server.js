// const jsonString = ' { "name" : "John" , "age" : 30 }';
// const jsonobject = JSON.parse(jsonString);
// console.log(jsonobject.age);

const express = require('express')
const app = express();

app.get('/', function (req, res) {
  res.send('Hey Folks')
})

app.listen(3000)