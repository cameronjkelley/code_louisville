"use strict";

var babbitAppControllers = angular.module("babbitAppControllers", []);

babbitAppControllers.controller("CarCtrl", ["$scope", "$http", function($scope, $http) {
	$http.get("cars.json").success(function(data) {
		$scope.cars = data;
	});
}]);

babbitAppControllers.controller("ScrollCtrl", ["$scope", "$location", "$anchorScroll", function($scope, $location, $anchorScroll) {
	$scope.scrollTo = function(id) {
		var old = $location.hash();
		$location.hash(id);
		$anchorScroll();
		$location.hash(old);
	}
}]);