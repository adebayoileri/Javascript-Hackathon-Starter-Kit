var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.status(200).json({
        message: 'Welcome to my app'
    });
})

app.listen(4001, function(){console.log('App started on port 4001')});