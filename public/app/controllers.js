angular.module('clinicApp')

.controller('MainCtrl', function($scope){
	$scope.testMessage = "Hi from main controller!";
})

.controller('BlogCtrl', function($scope){
	$scope.testMessage = "Hi from blog controller!";
})

.controller('HeaderCtrl', function($scope){
	$scope.testMessage = "Hi from header controller!";
})

.controller('TopSidebarCtrl', function($scope){
	$scope.testMessage = "Hi from top sidebar controller!";
})

.controller('NavigationCtrl', function($scope, $location) {
	$scope.isActive = function(path){ return path === $location.path() };
})

.controller('AdvantagesCtrl', function($scope) {
	$scope.showCurrent = function(selected) {
		if (selected == 1) {
			$scope.showStyle = { display: 'none' };
		}
	};

	$scope.isActive = function(path){ return path === $location.path() };
})

.controller('RevolutionSliderCtrl', function($scope){
	$scope.testMessage = "Hi from revolution slider controller!";
})

.controller('BottomCtrl', function($scope){
	$scope.testMessage = "Hi from bottom controller!";
})

.controller('BottomTweetsCtrl', function($scope){
	$scope.testMessage = "Hi from bottom tweets controller!";
})

.controller('FooterCtrl', function($scope){
	$scope.testMessage = "Hi from footer controller!";
})

.controller('SidebarCtrl', function($scope){
	$scope.testMessage = "Hi from sidebar controller!";
})

.controller('DoctorsCtrl', function($scope){
	$scope.testMessage = "Hi from doctors controller!";

	$scope.doctors = [
		{
			title: "Dr.",
			firstname: "Roshelle",
			lastname: "Beckwith",
			speciality: "Emergency Medicine",
			imageUrl: "images/doctors/roshelle-beckwith-2.jpg"
		},
		{
			title: "Dr.",
			firstname: "Matthew",
			lastname: "Beckwith",
			speciality: "Family Medicine",
			imageUrl: "images/doctors/matthew-beckwith.jpg"
		},
		{
			title: "Dr.",
			firstname: "Rosanna",
			lastname: "Pau",
			speciality: "Emergency Medicine",
			imageUrl: "images/doctors/rosanna-pau.jpg"
		},
		{
			title: "Dr.",
			firstname: "Brian",
			lastname: "Rader",
			speciality: "Emergency Medicine",
			imageUrl: "images/male-doctor-440x440.jpg"
		}
	];
})

.controller('ServicesCtrl', function($scope){
	$scope.testMessage = "Hi from services controller!";
})

.controller('ContactsCtrl', function($scope, $log, $timeout){
	// $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
	$scope.map = {center: {latitude: 39.11682, longitude: -77.53967 }, zoom: 12 };
	$scope.options = {scrollwheel: false};
	// $scope.coordsUpdates = 0;
	// $scope.dynamicMoveCtr = 0;
	$scope.marker = {
		id: 0,
		coords: {
			latitude: 39.11682,
			longitude: -77.53967
		}
		// options: { draggable: true },
		// events: {
		// 	dragend: function (marker, eventName, args) {
		// 		$log.log('marker dragend');
		// 		var lat = marker.getPosition().lat();
		// 		var lon = marker.getPosition().lng();
		// 		$log.log(lat);
		// 		$log.log(lon);

		// 		$scope.marker.options = {
		// 			draggable: true,
		// 			labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
		// 			labelAnchor: "100 0",
		// 			labelClass: "marker-labels"
		// 		};
		// 	}
		// }
	};
	// $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
	// 	if (_.isEqual(newVal, oldVal))
	// 		return;
	// 	$scope.coordsUpdates++;
	// });
	// $timeout(function () {
	// 	$scope.marker.coords = {
	// 		latitude: 42.1451,
	// 		longitude: -100.6680
	// 	};
	// 	$scope.dynamicMoveCtr++;
	// 	$timeout(function () {
	// 		$scope.marker.coords = {
	// 			latitude: 43.1451,
	// 			longitude: -102.6680
	// 		};
	// 		$scope.dynamicMoveCtr++;
	// 	}, 2000);
	// }, 1000);
})

.controller('SettingsCtrl', function($scope){
	$scope.testMessage = "==> Test message from settings controller. <==";

	$scope.clinic = {
		domain: "leesburguc.com",
		name: "Leesburg Urgent Care",
		phone: "(703) 687-4158",
		address: "952 Edwards Ferry Road NE",
		city: "Leesburg",
		zip: 20176,
		state: "VA"
	};

	$scope.clinic.email = "info@" + $scope.clinic.domain;
});
