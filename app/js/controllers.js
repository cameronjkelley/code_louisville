"use strict";

var babbitAppControllers = angular.module("babbitAppControllers", []);

babbitAppControllers.controller("HomeCtrl", ["$scope", "$http", function($scope, $http) {}]);

babbitAppControllers.controller("CarCtrl", ["$scope", "$http", function($scope, $http) {
	$http.get("cars.json").success(function(data) {
		$scope.cars = data;
	});
}]);

babbitAppControllers.controller("ContactCtrl", ["$scopr", "$http", function($scope, $http) {

}]);