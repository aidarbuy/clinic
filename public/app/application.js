angular.module('clinicApp', ['ui.router'])

.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");

  $stateProvider
      .state("main", {
          url: "/",
          templateUrl: "partials/main.html",
          controller: "MainCtrl"
      })

      .state("about-us", {
          url: "/about-us",
          templateUrl: "partials/about-us.html",
          controller: "MainCtrl"
      })

      .state("services", {
          url: "/services",
          templateUrl: "partials/services.html",
          controller: "ServicesCtrl"
      })

      .state("doctors", {
          url: "/doctors",
          templateUrl: "partials/doctors.html",
          controller: "DoctorsCtrl"
      })

      .state("appointments", {
          url: "/appointments",
          templateUrl: "partials/appointments.html",
          controller: "AppointmentsCtrl"
      })

      .state("blog", {
          url: "/blog",
          templateUrl: "partials/blog.html",
          controller: "BlogCtrl"
      })

      .state("contacts", {
          url: "/contacts",
          templateUrl: "partials/contacts.html",
          controller: "ContactsCtrl"
      })
});
