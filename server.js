var express = require('express'),
	eapp = express();

eapp.use(express.static(__dirname + '/public'))
	.set('views', __dirname)
	.get('*', function(zapros, vozvrat){
		vozvrat.sendFile(__dirname + '/index.html');
		// vozvrat.send("Hi from server!");
	});

var server = eapp.listen(process.env.PORT || 9000, function(){
	var host = server.address().address,
		port = server.address().port,
		protocol = server.address().family;
	return console.log("server listening at http://%s:%s (protocol %s)", host, port, protocol);
});