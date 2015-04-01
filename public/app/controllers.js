angular.module('clinicApp')
.controller('HeaderCtrl', function($scope){})

.controller('NavigationCtrl', function($scope, $location) {
	$scope.isActive = function(path){ return path === $location.path() };
})

.controller('TopSidebarCtrl', function($scope){})
.controller('MainCtrl', function($scope){})
.controller('AboutCtrl', function($scope){})
.controller('ServicesCtrl', function($scope){})

.controller('DoctorsCtrl', function($scope, Doctor) {
	$scope.doctors = Doctor.query();
})

.controller('DoctorCtrl', function($scope, $stateParams, Doctor) {
	$scope.doctor = Doctor.get({ id: parseInt($stateParams.doctorId, 10) });
})

.controller('AppointmentsCtrl', function($scope){})
.controller('BlogCtrl', function($scope){})

.controller('ContactsCtrl', function($scope, $log, $timeout){
	$scope.map = {center: {latitude: 39.11682, longitude: -77.53967 }, zoom: 12 };
	$scope.options = {scrollwheel: false};
	$scope.marker = {
		id: 0,
		coords: {
			latitude: 39.11682,
			longitude: -77.53967
		}
	};
})

.controller('RevolutionSliderCtrl', function($scope){})
.controller('SidebarCtrl', function($scope){})
.controller('BottomTweetsCtrl', function($scope){})
.controller('BottomCtrl', function($scope){})
.controller('FooterCtrl', function($scope){})

.controller('AdvantagesCtrl', function($scope) {
	$scope.showCurrent = function(selected) {
		if (selected == 1) {
			$scope.showStyle = { display: 'none' };
		}
	};

	$scope.isActive = function(path){ return path === $location.path() };
})

.controller('SettingsCtrl', function($scope){
	$scope.clinic = {
		domain: "metromeduc.com",
		name: "MetroMed Urgent Care",
		phone: "(703) 687-4158",
		address: "952 Edwards Ferry Road NE",
		city: "Leesburg",
		zip: 20176,
		state: "VA"
	};
	$scope.clinic.email = "info@" + $scope.clinic.domain;
});
