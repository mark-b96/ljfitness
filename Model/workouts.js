var mongoose = require('mongoose');

var workoutSchema = mongoose.Schema({
    Day: {
        type: Number
    },
    w1: {
        type: Array
    },
    w2: {
        type: Array
    },
    w3: {
        type: Array
    },
    w4: {
        type: Array
    },
    w5: {
        type: Array
    },
    w6: {
        type: Array
    }
});

var Workout = module.exports = mongoose.model('Workout', workoutSchema);