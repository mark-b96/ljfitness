var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/View/index.html');
});

app.use(express.static('./public'));


var msg = require('./public/animation.js');

app.listen(3000);