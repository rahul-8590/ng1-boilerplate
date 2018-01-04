angular
.module('myApp')
.controller('view2Ctrl', [
	'$rootScope',
	'$scope',
	'$http',
	// 'test_data',
	function ($rootScope, $scope, $http) { // add $test_data at last

		console.log('View 2 Page');

	}]);