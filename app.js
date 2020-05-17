const express = require('express');
const mongoose = require('mongoose');
const hbs = require('express-handlebars');
const path = require('path');
const handlebarsHelpers = require('handlebars-helpers')();

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

app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'index', layoutsDir: __dirname + '/View', helpers: handlebarsHelpers }));
app.set('views', path.join(__dirname, '/View'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/Controller/menu.js', function (req, res) {
    res.sendFile(__dirname + '/Controller/menu.js');
});

app.get('/Exercises', function (req, res) {
    Workout.find(function (err, workouts) {
        if (err) {
            console.log(err)
        } else {
            res.render('workouts', {
                workouts: workouts
            });
        }
    }).lean().sort({ Day: 1 });
});

app.get('/1', function (req, res) {
    Workout.find({ Day: 1 }, function (err, workouts) {
        if (err) {
            console.log(err)
        } else {
            res.render('Day 1', {
                workout: workouts
            });
        }
    }).lean();
});

app.get('/2', function (req, res) {
    Workout.find({ Day: 2 }, function (err, workouts) {
        if (err) {
            console.log(err)
        } else {
            res.render('Day 2', {
                workout: workouts
            });
        }
    }).lean();
});

app.get('/3', function (req, res) {
    Workout.find({ Day: 3 }, function (err, workouts) {
        if (err) {
            console.log(err)
        } else {
            res.render('Day 3', {
                workout: workouts
            });
        }
    }).lean();
});

app.get('/4', function (req, res) {
    Workout.find({ Day: 4 }, function (err, workouts) {
        if (err) {
            console.log(err)
        } else {
            res.render('Day 4', {
                workout: workouts
            });
        }
    }).lean();
});

app.get('/5', function (req, res) {
    Workout.find({ Day: 5 }, function (err, workouts) {
        if (err) {
            console.log(err)
        } else {
            res.render('Day 5', {
                workout: workouts
            });
        }
    }).lean();
});

app.get('/6', function (req, res) {
    Workout.find({ Day: 6 }, function (err, workouts) {
        if (err) {
            console.log(err)
        } else {
            res.render('Day 6', {
                workout: workouts
            });
        }
    }).lean();
});

app.get('/7', function (req, res) {
    Workout.find({ Day: 7 }, function (err, workouts) {
        if (err) {
            console.log(err)
        } else {
            res.render('Day 7', {
                workout: workouts
            });
        }
    }).lean();
});

app.get('/Programmes', function (req, res) {
    res.render('programmes');
});

app.get('/Contact', function (req, res) {
    res.render('contact');
});

app.get('/Tips', function (req, res) {
    res.render('tips');
});

app.use(express.static('./public'));

app.listen(3000);