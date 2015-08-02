"use strict";

var babbitAppFilters = angular.module("babbitAppFilters", []);

babbitAppFilters.filter("alphabetical", function() {
	return function(items) {
		return items.sort();
	};
});