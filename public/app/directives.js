angular.module('clinicApp')

.directive('mainHeader', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/header.html',
		controller: 'HeaderCtrl'
	};
})

.directive('navigation', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/navigation.html',
		controller: 'NavigationCtrl'
	};
})

.directive('revolutionSlider', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/revolution-slider.html',
		controller: 'RevolutionSliderCtrl'
	};
})

.directive('bottomTweets', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/bottom-tweets.html',
		controller: 'BottomTweetsCtrl'
	};
})

.directive('topSidebar', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/top-sidebar.html',
		controller: 'TopSidebarCtrl'
	};
})

.directive('aydekeSidebar', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/sidebar.html',
		controller: 'SidebarCtrl'
	};
})

.directive('bottom', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/bottom.html',
		controller: 'SettingsCtrl'
	};
})

.directive('mainFooter', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/footer.html',
		controller: 'SettingsCtrl'
	};
});