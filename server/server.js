var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var path = require("path");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var pool = require('./modules/pool.js');

app.get('/*', function(req, res){
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(port, function(){
  console.log('starting application');
  console.log('listening on port:', port);
});
