angular.module('clinicApp')

.controller('MainCtrl', function($scope) {
	$scope.testMessage = "Hi from main controller!";
})

.controller('HeaderCtrl', function($scope) {
	$scope.testMessage = "Hi from header controller!";
})

.controller('NavigationCtrl', function($scope) {
	$scope.testMessage = "Hi from navigation controller!";
})

.controller('RevolutionSliderCtrl', function($scope) {
	$scope.testMessage = "Hi from revolution slider controller!";
})

.controller('BottomCtrl', function($scope) {
	$scope.testMessage = "Hi from bottom controller!";
})

.controller('BottomTweetsCtrl', function($scope) {
	$scope.testMessage = "Hi from bottom tweets controller!";
})

.controller('FooterCtrl', function($scope) {
	$scope.testMessage = "Hi from footer controller!";
})

.controller('ContactsCtrl', function($scope) {
	$scope.testMessage = "Hi from contacts controller!";
})

.controller('TopSidebarCtrl', function($scope) {
	$scope.testMessage = "Hi from top sidebar controller!";
})

.controller('SidebarCtrl', function($scope) {
	$scope.testMessage = "Hi from sidebar controller!";
})

.controller('DoctorsCtrl', function($scope) {
	$scope.testMessage = "Hi from doctors controller!";
})

.controller('ServicesCtrl', function($scope) {
	$scope.testMessage = "Hi from doctors controller!";
})

.controller('SettingsCtrl', function($scope) {
	$scope.testMessage = "Hi from settings controller!";
	$scope.clinic = {
		name: "NexeMed",
		phone: "(703) 687 41 58",
		email: "info@nexemed.com",
		address: "952 Edwards Ferry Road NE",
		city: "Leesburg",
		state: "VA"
	};
});