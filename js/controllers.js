"use strict";

var babbitAppControllers = angular.module("babbitAppControllers", []);

babbitAppControllers.controller("CarCtrl", ["$scope", "$http", function($scope, $http) {
	$http.get("cars.json").success(function(data) {
		$scope.cars = data;
	});
}]);
