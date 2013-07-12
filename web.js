
var fs = require("fs"); 
var fileName = "index.html"; 

var express = require('express');
var app = express.createServer(express.logger());

fs.readFile(fileName, function (err, data) {
    if (err) throw err;
    //console.log(data.toString());
      app.get('/', function(request, response) {
        response.send(data.toString());
      });

    });
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
