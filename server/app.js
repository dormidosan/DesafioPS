const express = require('express');
const cors = require('cors');

var app = express();
var authRoute = require('./routes/auth');
var userRoute = require('./routes/user');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', authRoute);
app.use('/', userRoute);
app.use(express.static(__dirname + '/public'));
app.listen(3001);

module.exports = app;