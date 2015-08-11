"use strict";

var babbitAppDirectives = angular.module("babbitAppDirectives", [])

.directive("lightbox", function() {
	return {
		restrict: "E",
		link: function(scope, element, attrs) {
			$(element).lightbox(scope.$eval(attrs.data-lightbox));
		}
	};
});