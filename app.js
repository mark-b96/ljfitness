const express = require('express');
const mongoose = require('mongoose');
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');



mongoose.connect('mongodb://localhost/Workouts', {
    useNewUrlParser: true
});

let db = mongoose.connection;

let Workouts = require('./Model/workouts');

db.once('open', function () {
    console.log("Connected to mongoDB");
})

db.on('error', function (err) {
    console.log(err);
});

const app = express();

app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'index', layoutsDir: __dirname + '/public/View' }));
app.set('views', path.join(__dirname, 'public/View'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', function (req, res) {
    var w;
    Workouts.find({ Day: 1 }, function (err, workouts) {
        workout: w;
    });

    res.render('index', { sets: 4, time: 60, exercise: w });
});

app.use(express.static('./public'));

app.listen(3000);