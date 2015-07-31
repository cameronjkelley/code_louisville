"use strict";

var babbitAppControllers = angular.module("babbitAppControllers", []);

babbitAppControllers.controller("CarCtrl", ["$scope", "$http", "$routeParams", 
	function($scope, $http, $routeParams) {
		$http.get("cars.json").success(function(data) {
			$scope.cars = data;
	});
		$scope.carId = $routeParams.carId;
	}]);