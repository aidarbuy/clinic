'use strict';

angular.module('clinicApp')

.factory('Doctor', function ($resource) {
	return $resource('/api/doctors/:id');
});
