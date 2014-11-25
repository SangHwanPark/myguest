var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/test', function (req, res) {
  res.send('Hello test');
});

app.get('/html', function (req, res) {
  res.send('Hello html');
});

app.listen(3000);