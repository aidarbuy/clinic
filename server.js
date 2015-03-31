// Dependencies
var	express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	Doctor = require('./models/doctor'),
	Promise = require('bluebird'),
	doctorsData = require('./doctors-data');
	serverURL = "mongodb://dbuser:dbpassword@ds041238.mongolab.com:41238/clinic";

// Database
doctorsData.connectDB(serverURL)
	.then(function() {
		console.log("connected to remote mongoDB");
	})
	.then(doctorsData.resetDoctors)
	.then(doctorsData.seedDoctors);

// Express
var eapp = express();
eapp.use(express["static"](__dirname + '/public'))
//	.use(bodyParser.json())
	.set('views', __dirname);
//	.set('view engine', 'jade');

// Routes
eapp.get('/api/doctors', function(req, res) {
		return Doctor.find({}, function(err, data) {
			if (err) {
				res.send(err);
			}
			return res.json(data);
		});
	})
	.get('/api/doctors/:id', function(req, res) {
		return Doctor.findOne({id: parseInt(req.params.id, 10)}, function(err, data) {
			if (err) {
				res.send(err);
			}
			console.log(JSON.stringify(req.params));
			return res.json(data);
		});
	})
//	.get('*', function(req, res) {
//		 return res.sendFile(__dirname + '/index.html');
//	});

// Server
server = eapp.listen(process.env.PORT || 9000, function() {
	var host = server.address().address,
	port = server.address().port,
	protocol = server.address().family;
	console.log("server listening at http://%s:%s (protocol %s)", host, port, protocol);
});