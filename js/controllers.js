"use strict";

var babbitAppControllers = angular.module("babbitAppControllers", [])

.controller("CarCtrl", ["$scope", "$http", "$location", "$routeParams", 
	function($scope, $http, $location, $routeParams) {
		$scope.carId = $routeParams.carId;
		$scope.listing = [];
		$http.get("cars.json").success(function(data) {
			$scope.cars = data;
			for (var i = 0; i < $scope.cars.length; i ++) {
				if ($scope.cars[i].id === $scope.carId) {
					$scope.listing.push($scope.cars[i]);
				}
			}
		});
	}]);