var express = require('express');
const app = express();

app.get('/routes',(req, res)=>{
    res.json('All routes files')
});

module.exports = app;