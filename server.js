// Dependencies
var express = require('express');

// MongoDB
// serverURL = 'mongodb://dbuser:dbpassword@ds045001.mongolab.com:45001/medify4'
// doctorsData.connectDB serverURL
// .then () -> console.log "connected to remote mongoDB"
// .then doctorsData.resetDoctors
// .then doctorsData.seedDoctors

// Express
var eapp = express();
eapp.use(express.static(__dirname + '/public'))
//    .use(bodyParser.json())
    .set('views', __dirname);
//    .set('view engine', 'jade');

// Routes
//eapp.get('/api/doctors', function(req, res){
//Doctor.find {} , (err, data) ->
//res.send err if err
//res.json data
//.get '/api/doctors/:id', (req, res) ->
//Doctor.findOne { id: parseInt req.params.id, 10 } , (err, data) ->
//res.send err if err
//console.log JSON.stringify req.params
//res.json data
//# .use '/api', require './routes/api'
//# .get '*', (req, res) -> res.sendFile __dirname + '/markers.html'
eapp.get('*', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// Server
var server = eapp.listen(process.env.PORT || 9000, function(){
	var host = server.address().address,
		port = server.address().port,
		protocol = server.address().family;
	console.log("server listening at http://%s:%s (protocol %s)", host, port, protocol);
});