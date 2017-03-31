// Load the express web framework module
var express = require('express');
// Load our seneca module
var seneca = require('./seneca');

// Create an instance of express
var app = express();

// Use port 3000 unless one is set in the env
var port = process.env.PORT || 3000;

// Define some HTTP routes (e.g., URLs) users can access on our server

// GET http://localhost:3000/
app.get('/', function (req, res) {
  res.send('My Server is working!');
});

app.get('/healthcheck', function (req, res) {
 var time = process.uptime();
 var updatedtime = (time + "").toHHMMSS();
 res.json({
    uptime: updatedtime,
  });
});

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}

// GET http://localhost:3000/validate/someone@myseneca.ca
app.get('/validate/:email', function (req, res) {
  var email = req.params.email;

  // Return a JSON formatted response indicating that the given
  // email address is valid or invalid.
  res.json({
    email: email,
    valid: seneca.isValidEmail(email)
  });
});

// GET http://localhost:3000/format/someone
app.get('/format/:name', function (req, res) {
  var name = req.params.name;

  // Return a JSON formatted response with the given name
  // formatted as a valid email address.
  res.json({
    name: name,
    email: seneca.formatSenecaEmail(name)
  });
});

// Start our web server on port 3000
app.listen(port, function () {
  console.log('Server started on http://localhost:' + port);
});