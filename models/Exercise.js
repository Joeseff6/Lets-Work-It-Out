const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
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
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;