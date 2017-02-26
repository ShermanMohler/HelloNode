/**
 * To see this work, try a URL like: "http://127.0.0.1:8000/api/users?fname=Sherman&lname=Mohler3&age=33&eye=green"
 */
// Load the http module to create an http server.
var express = require('express');


function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var app = express();
var port = process.env.PORT || 8000;

// routes will go here
app.get('/api/users', function(req, res) {
	  var fname = req.param('fname');
	  var lname = req.param('lname');
	  var age = req.param('age');  
	  var eye = req.param('eye');
	  
	  var myFather = new Person("John", "Doe", 50, "blue");
	  var myMother = new Person("Sally", "Rally", 48, "green");
	  var newPerson = new Person(fname, lname, age, eye);
	  var x5 = new Array();     // A new Array object
	  x5.push(myFather);
	  x5.push(myMother);
	  x5.push(newPerson);

	  // res.send(user_id + ' ' + token + ' ' + geo);
	  res.send(JSON.stringify(x5));
	});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);