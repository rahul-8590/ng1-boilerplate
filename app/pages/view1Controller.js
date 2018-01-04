angular
.module('myApp')
.controller('view1Ctrl', [
	'$rootScope',
	'$scope',
	'$http',
	// 'test_data',
	function ($rootScope, $scope, $http) { // add $test_data at last

		console.log('View 1 Page');

	}]);