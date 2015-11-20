var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.listen(9001, function() {
  console.log('We are listing on: ', 9001);
});

app.get('/', function(req, res) {
  res.statusCode = 200;
  res.json(messages);
  res.end();
});

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Content-Type', 'application/JSON');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/', function(req, res) {
  res.statusCode = 200;
  console.log(req.body);
  messages.push(req.body);
  res.json({truthy: true}); // could also use res.send();
});


// var http = require('http'),
//   port = 9001;
var messages = [{message: 'Hey brother', user: 'Jason', timestamp: new Date()}, {message: 'Her?', user: 'Jason', timestamp: new Date()}, {message: 'I made a huge mistake', user: 'Jason', timestamp: new Date()}, {message: 'Chaw chee chaw chee chaw', user: 'Jason', timestamp: new Date()}, {message: 'There is always money in the banana stand', user: 'Jason', timestamp: new Date()}, {message: 'Quit essing around', user: 'Jason', timestamp: new Date()}, {message: 'I\'m a monster!', user: 'Jason', timestamp: new Date()}];

// function onRequest(req, res, next) {
//   res.writeHead(200, {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
//   });

//   if (req.method === 'GET') {
//     return res.end(JSON.stringify(messages));
//   }

//   if (req.method === 'POST') {
//     var str = '';
//     req.on('data', function(chunk) {
//       str += chunk.toString();
//     });

//     req.on('end', function() {
//       var parsedMessage = JSON.parse(str);
//       parsedMessage.timestamp = new Date();
//       messages.push(parsedMessage);
//     });

//     return res.end('message added');
//   }

//   return res.end();
// };

// http.createServer(onRequest).listen(port, function() {
//   console.log('listening on port:', port);
// });
