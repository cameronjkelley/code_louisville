"use strict";

var babbitApp = angular.module('babbitApp', [
	'ngRoute',
	'babbitAppControllers'
]);

babbitApp.config(["$routeProvider",
	function($routeProvider) {
		$routeProvider.
		when("/home", {
			templateUrl: "partials/home.html",
			controller: "HomeCtrl"
		}).
		when("/cars", {
			templateUrl: "partials/cars.html",
			controller: "CarCtrl"
		}).
		when("/contact", {
			templateUrl: "partials/contact.html"
		}).
		otherwise({
			redirectTo: "partials/home.html"
		});
	}
]);