"use strict";

var babbitApp = angular.module("babbitApp", []);

babbitApp.controller("CarCtrl", ["$scope", "$http", function($scope, $http) {
	$http.get("cars.json").success(function(data) {
		$scope.cars = data;
	})
});