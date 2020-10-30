"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.js
//
var PORT = process.env.HTTP_PORT || 8080;
var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build')));

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "web-scraper.c78qxjw1gccg.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "GMCapstone2020"
});
app.get('/query', function (req, res) {
  con.connect(function (err) {
    con.query('SELECT * FROM Capstone.scrapes', function (err, result, fields) {
      if (err) res.send(err);

      if (result) {
        res.json({
          url: result[8]["url"]
        });
      }
    });
  });
});
app.get('/', function (req, res) {
  res.send('Its a basic connection');
});
app.get('/flower', function (req, res) {
  res.json({
    name: 'Dandelion',
    colour: 'Blue-ish'
  });
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
