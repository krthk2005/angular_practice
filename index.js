var express = require('express'),
  http = require('http');

var employees = require('./data/employees.json');
var employeeModifications = [];


var jsonfile = require('jsonfile')
var util = require('util')

var file = './data/employees.json'


var app = express()
  .use(express.bodyParser())
  .use(express.static(__dirname + '/public'))
  .use('/node_modules',  express.static(__dirname + '/node_modules'));
 
app.get('/employees', function  (req, res) {
  res.json(jsonfile.readFileSync(file));
});

app.post('/employeeModifications', function  (req, res) {
   jsonfile.writeFileSync(file, req.body)
   res.send("success");
});

app.get('/*', function  (req, res) {
  res.json(404, {status: 'not found'});
});

http.createServer(app).listen(3000, function () {
  console.log("Server ready at http://localhost:3000");
});