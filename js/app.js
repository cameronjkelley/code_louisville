"use strict";

var babbitApp = angular.module("babbitApp", [
	"ngRoute",
	"babbitAppControllers",
	"babbitAppDirectives",
	"babbitAppFilters"
])

.config(["$routeProvider",
	function($routeProvider) {
		$routeProvider.
		when("/home", {
			templateUrl: "partials/home.html"
		}).
		when("/cars/:carId", {
			templateUrl: "partials/cars.html",
			controller: "CarCtrl"
		}).
		when("/contact", {
			templateUrl: "partials/contact.html"
		}).
		otherwise({
			redirectTo: "/home"
		});
	}
]);