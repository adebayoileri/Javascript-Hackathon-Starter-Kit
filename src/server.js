var express = require('express');
var routes = require('./routes/index');

var app = express();

app.use('/api/v1', routes)

app.get('/', function(req, res){
    res.status(200).json({
        message: 'Welcome to my app'
    });
})

app.listen(4001, function(){console.log('App started on port 4001')});

module.exports = app;