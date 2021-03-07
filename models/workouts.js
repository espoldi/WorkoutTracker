const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for your workout"
  },
  type: {
    type: Number,
    required: "Enter an amount"
  },
  weight: {
    type: Number,
    required: "How many pounds"
  },
  sets: {
    type: Number,
    default: "How many sets did you do"
  },
  reps: {
    type: Number,
    default: "How many reps did you do"
  },
  duration: {
    type: Number,
    default: "How many minutes long was your workout"
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
