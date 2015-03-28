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

.directive('topSidebar', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/top-sidebar.html',
		controller: 'TopSidebarCtrl'
	};
})

.directive('services', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/services.html',
		controller: 'MainCtrl'
	};
})

.directive('latestServices', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/latest-services.html',
		controller: 'MainCtrl'
	};
})

.directive('latestNews', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/latest-news.html',
		controller: 'MainCtrl'
	};
})

.directive('testimonials', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/testimonials.html',
		controller: 'MainCtrl'
	};
})

.directive('ourDoctors', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/our-doctors.html',
		controller: 'DoctorsCtrl'
	};
})

.directive('bottomTweets', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/bottom-tweets.html',
		controller: 'BottomTweetsCtrl'
	};
})

.directive('sidebar', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/sidebar.html',
		controller: 'SidebarCtrl'
	};
})

.directive('advantages', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/advantages.html',
		controller: 'AdvantagesCtrl'
	};
})

.directive('download', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/download.html',
		controller: 'MainCtrl'
	};
})

.directive('statistics', function(){
	return {
		restrict: 'EA',
		templateUrl: 'partials/statistics.html',
		controller: 'MainCtrl'
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
})

.directive('mySlider', function($document) {
	return {
		restrict: 'EA',
		link: function(scope, element, attr) {
			function invokeSlider() {
				jQuery(element)
				.cmsmsResponsiveContentSlider({
					sliderWidth: '100%',
					sliderHeight: 'auto',
					animationSpeed: 500,
					animationEffect: 'slide',
					animationEasing: 'easeInOutExpo',
					pauseTime: 0,
					activeSlide: 1,
					touchControls: false,
					pauseOnHover: false,
					arrowNavigation: true,
					slidesNavigation: false
				})
			}

			invokeSlider();
		}
	};
});
