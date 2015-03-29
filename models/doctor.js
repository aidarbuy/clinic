var mongoose = require('mongoose');

var doctorSchema = mongoose.Schema({
	id: Number,
	title: String,
	firstname: String,
	lastname: String,
	speciality: String,
	degree: String,
	education: String,
	imageUrl: String,
	description: String
});

module.exports = mongoose.model('Doctor', doctorSchema);
