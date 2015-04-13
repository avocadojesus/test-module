angular.module('citapp.directives').directive('testModule', function($location){
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: {},
		templateUrl: "test-module.html",
		link: function(scope, element, attrs) {
			
			alert('o')

		}
	}
});