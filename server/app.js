var express = require('express');
const path = require('path')
var cors = require('cors');
var app = express();

var port = 8080;
const secret = 'i here too';


app.use(cors());

app.get('/intents.json', function (req, res, next) {
    res.sendFile(__dirname + '/intents.json');
})

app.listen(port, function () {
    console.log(`Hello,`)
    console.log(`Server is running on port ${port}`)
})
