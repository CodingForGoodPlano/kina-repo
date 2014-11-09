'use strict';

angular.module('app.main', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/main', {
		templateUrl: 'main.html',
		controller: 'MainCtrl'
	});
}])
.controller('MainCtrl', [function() {

}]);