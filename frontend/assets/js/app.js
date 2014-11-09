'use strict';

angular.module('app', [
	'ngRoute',
	'app.main',
	//'app.view2'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/main'});
}]);