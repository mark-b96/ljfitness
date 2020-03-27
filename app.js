const express = require('express');
const mongoose = require('mongoose');
const hbs = require('express-handlebars');
const path = require('path');

// mongoose.connect('mongodb://localhost/Workouts', {
//     useNewUrlParser: true
// });

// let db = mongoose.connection;

// let Workouts = require('./Model/workouts');

// db.once('open', function () {
//     console.log("Connected to mongoDB");
// })

// db.on('error', function (err) {
//     console.log(err);
// });

const app = express();

app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'index', layoutsDir: __dirname + '/View' }));
app.set('views', path.join(__dirname, '/View'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/Workouts', function (req, res) {
    res.render('workouts');
});

app.get('/Biometrics', function (req, res) {
    res.render('biometrics');
});

app.get('/Contact', function (req, res) {
    res.render('contact');
});

app.get('/Tips', function (req, res) {
    res.render('tips');
});

app.use(express.static('./public'));

app.listen(3000);