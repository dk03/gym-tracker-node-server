const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutDayListSchema = new Schema({
    _id:  mongoose.Types.ObjectId,
    userid: String,
    workouts: Object,

});

module.exports = mongoose.model('workoutDayList', workoutDayListSchema);