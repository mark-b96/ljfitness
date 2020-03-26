let mongoose = require('mongoose');

let workoutSchema = mongoose.Schema({
    day: {
        type: Number,
        required: true
    }
});

let workout = module.exports = mongoose.model('Workouts', workoutSchema);