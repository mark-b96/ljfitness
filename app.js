const express = require('express');
const mongoose = require('mongoose');
const hbs = require('express-handlebars');
const path = require('path');

mongoose.connect('mongodb://localhost/test_db', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

var db = mongoose.connection;

db.once('open', function () {
    console.log("Connected to mongoDB");
})

db.on('error', function (err) {
    console.log(err);
});

const app = express();

let Workout = require('./Model/workouts');

app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'index', layoutsDir: __dirname + '/View' }));
app.set('views', path.join(__dirname, '/View'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    const query = req.query;
    console.log(query);

    Workout.find(function (err, workouts) {
        if (err) {
            console.log(err)
        } else {
            res.render('home', {
                workouts: workouts
            });
        }
    }).lean();
});

app.get('/Controller/menu.js', function (req, res) {
    res.sendFile(__dirname + '/Controller/menu.js');
});

app.get('/Controller/days.js', function (req, res) {
    res.sendFile(__dirname + '/Controller/days.js');

});

app.get('/Exercises', function (req, res) {
    res.render('workouts');
});

app.get('/Contact', function (req, res) {
    res.render('contact');
});

app.get('/Tips', function (req, res) {
    res.render('tips');
});

app.use(express.static('./public'));

app.listen(3000);