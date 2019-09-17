const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('hola everyone');
})

app.listen('8080');