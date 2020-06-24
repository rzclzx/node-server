var http = require('http');
var express = require('express');
var ecstatic = require('ecstatic');
var history = require('connect-history-api-fallback');

var app = express();

app.use(history());
app.use(ecstatic({ root: __dirname + '/dist' }));

http.createServer(app).listen(8888, function () {
    console.log("server at 8888...");
});