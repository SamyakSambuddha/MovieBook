const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const userRouter = require('./routes/userRoutes');
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



// app.get('/movies', (req, res) => {
// 	res.send("All Movies Data in JSON format from Mongo DB");
// });

// app.get('/genres', (req, res) => {
// 	res.send("All Genres Data in JSON format from Mongo DB");
// });

// app.get('/artists', (req, res) => {
// 	res.send("All Artists Data in JSON format from Mongo DB");
// });
require("./routes/movie.routes")(app);

// load the routes for genre
require("./routes/genre.routes")(app);

// // load the routes for artist
require("./routes/artist.routes")(app);

require("./routes/user.routes")(app);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad Movie booking application development." });
});

app.listen(8085, () => {
	console.log('Server Running at 8085');
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });