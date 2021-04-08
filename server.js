const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);
const path = require(`path`);
const date = new Date;
const today =  `${date.getMonth()+1}/${date.getDay()}/${date.getFullYear()}`

const PORT = process.env.PORT || 3000;

const db = require(`./models`);

const app = express();

app.use(logger(`dev`));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(`public`));

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/workout`, { useNewUrlParser: true });

// GET routes to send user to file
app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname + `/public/html/index.html`));
});

app.get(`/exercise`, (req, res) => {
  res.sendFile(path.join(__dirname + `/public/html/exercise.html`));
});

app.get(`/stats`, (req, res) => {
  res.sendFile(path.join(__dirname + `/public/html/stats.html`));
});
// --------------------------------------------

// API Routes
app.get(`/api/workouts`, async (req,res) => {
  try {
    const lastWorkout = await db.Workout.find({});
    res.status(200).json(lastWorkout);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.get(`/api/workouts/range`, async (req,res) => {
  try {
    const aggregate = await db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: {$sum: "$exercises.duration"},
        },
      },
    ]);
    res.status(200).json(aggregate);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.post(`/api/workouts`, async ({body},res) => {
  try {
    const newWorkout = await db.Workout.create(body);
    newWorkout.date = today;
    res.status(200).json(newWorkout);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.put(`/api/workouts/:id`, async (req,res) => {
  try {
    const id = req.params.id
    const updateWorkout = await db.Workout.findByIdAndUpdate(id, { $push: {exercises: req.body} }, {new: true });
    res.status(200).json(updateWorkout);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  };
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

