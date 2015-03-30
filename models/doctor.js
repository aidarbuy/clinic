var mongoose = require('mongoose');

var doctorSchema = mongoose.Schema({
	id: Number,
	title: String,
	firstname: String,
	lastname: String,
	speciality: String,
	degree: String,
	education: String,
	imageSmall: String,
	imageLarge: String,
	description: String,
	email: String
});

module.exports = mongoose.model('Doctor', doctorSchema);
