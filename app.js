require("rootpath")();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const expressValidator = require("express-validator");
app.use(expressValidator());
const cors = require("cors");
const path = require("path");

const morgan = require("morgan");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

// api routes
app.use('/api/v1/', require('./routes/email'));

//Set static folder
app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

module.exports = app;