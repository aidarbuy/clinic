angular.module('clinicApp', ['ui.router', 'ngAnimate', 'uiGmapgoogle-maps'])

.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");

  $stateProvider
      .state("main", {
          url: "/",
          templateUrl: "templates/main.html",
          controller: "MainCtrl"
      })

      .state("about-us", {
          url: "/about-us",
          templateUrl: "templates/about-us.html",
          controller: "MainCtrl"
      })

      .state("services", {
          url: "/services",
          templateUrl: "templates/services.html",
          controller: "ServicesCtrl"
      })

      .state("doctors", {
          url: "/doctors",
          templateUrl: "templates/doctors.html",
          controller: "DoctorsCtrl"
      })

      .state("doctor", {
          url: "/doctor",
          templateUrl: "templates/doctor.html",
          controller: "DoctorCtrl"
      })

      .state("appointments", {
          url: "/appointments",
          templateUrl: "templates/appointments.html",
          controller: "AppointmentsCtrl"
      })

      .state("blog", {
          url: "/blog",
          templateUrl: "templates/blog.html",
          controller: "BlogCtrl"
      })

      .state("contacts", {
          url: "/contacts",
          templateUrl: "templates/contacts.html",
          controller: "ContactsCtrl"
      })
})

.config(function(uiGmapGoogleMapApiProvider) {
	uiGmapGoogleMapApiProvider.configure({
		//    key: 'your api key',
		v: '3.17',
		libraries: 'weather,geometry,visualization'
	});
});