var	Promise = require('bluebird'),
	mongoose = require('mongoose'),
	doctorsSeed = require('./doctors-seed'),
	Doctor = mongoose.model('Doctor');

var findDoctors = function(query) {
	return Promise.cast(Doctor.find(query).exec());
};

var createDoctor = Promise.promisify(Doctor.create, Doctor);

exports.findDoctors = findDoctors;

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

exports.resetDoctors = function() {
	return mongoose.connection.collections['doctors'].drop(function(err) {
		console.log('doctors collection dropped');
	});
};

exports.seedDoctors = function() {
	return findDoctors({}).then(function(collection) {
		if (collection.length === 0) {
			Promise.map(doctorsSeed, function(doctor) {
				return createDoctor(doctor);
			});
			console.log("doctors have been seeded");
		}
	});
};
