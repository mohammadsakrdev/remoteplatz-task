const express = require('express');
const _ = require('lodash');
const app = express();
const splitTrips = require('./helper');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const exampleData = require('../data/tracking.json');

app.get('/', (req, res) => {
  // TODO(Task 1): Split tracking data into trip segments for example by using the time property.
  let splittedTrips = splitTrips(exampleData);
  res.send(splittedTrips);
});

app.get('/location/:when', (req, res) => {
  // TODO(Task 2): Return the tracking data closest to `req.params.when` from `exampleData`.
  res.send({});
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
