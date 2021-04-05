const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);
const path = require(`path`);


const PORT = process.env.PORT || 3000;

const db = require(`./models`);

const app = express();

app.use(logger(`dev`));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(`public`));

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/workout`, { useNewUrlParser: true });


app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname + `/public/html/index.html`));
});

app.get(`/exercise`, (req, res) => {
  res.sendFile(path.join(__dirname + `/public/html/exercise.html`));
});

app.get(`/stats`, (req, res) => {
  db.Workout.find({}).populate(`exercises`)
  .then(response => {
    console.log(response)
  })
  res.sendFile(path.join(__dirname + `/public/html/stats.html`));
});

app.get(`/api/workouts/range`, (req,res) => {

})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

