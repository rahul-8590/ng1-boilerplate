angular
.module('myApp')
.controller('indexCtrl', [
	'$rootScope',
	'$scope',
	'$http',
	// 'test_data',
	function ($rootScope, $scope, $http) { // add $test_data at last

		console.log('Index Page');

	}]);