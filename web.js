var express = require('express');
var app = express.createServer(express.logger());

var fs = require("fs");
var buffer = new Buffer(20);

fs.readFile("index.html", function (err, data) {
    if (err) throw err;
    console.log(data.toString());
    buffer = new Buffer(data, "utf-8")
    console.log(buffer.toString());
});

app.get('/', function(request, response) {
    response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
