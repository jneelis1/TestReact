// server.js
//

import path from 'path';
import express from 'express';
const PORT = process.env.HTTP_PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

const mysql = require('mysql');

const con = mysql.createConnection({
    host: "web-scraper.c78qxjw1gccg.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "GMCapstone2020"
});



app.get('/query', (req, res) => {
    con.connect(function(err) {
        con.query('SELECT * FROM Capstone.scrapes', function(err, result, fields) {
            if (err) res.send(err);
            if (result){
              res.json({
                url: result[7]["url"]
              });
            }
        });
    });
});

app.get('/', (req, res) => {
  res.send('Its a basic connection');
});
app.get('/flower', (req, res) => {
  res.json({
    name: 'Dandelion',
    colour: 'Blue-ish'
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});