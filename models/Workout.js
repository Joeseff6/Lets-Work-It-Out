const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
    },
    exercises: [
        {
        type: {
            type: String,
            trim: true,
        },
        name: {
            type: String,
            trim: true,
        },
        duration: {
            type: Number,
            min: 0,
            max: 60,
        },
        weight: {
            type: Number,
            min: 2.5,
        },
        reps: {
            type: Number,
            min: 1,
        },
        sets: {
            type: Number,
            min: 1,
        },
        distance: {
            type: Number,
        },
    },
],
});

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout;