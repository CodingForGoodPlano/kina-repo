'use strict';

angular.module('app', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/main', {
		templateUrl: 'main.html',
		controller: 'MainCtrl'
	})
	.when('/register', {
		templateUrl: 'register.html',
		controller: 'RegisterCtrl'
	})
  .when('/dashboard', {
    templateUrl: 'dashboard.html',
    controller: 'DashboardCtrl'
  })
		.when('/pathflow', {
			templateUrl: 'pathflow.html',
			controller: 'PathFlowCtrl'
		})
    .when('/about', {
      templateUrl: 'about.html',
    })
	.otherwise({
		redirectTo: '/main'
	});
}])
.controller('MainCtrl', ['$scope', function($scope) {

}])
.controller('RegisterCtrl', ['$scope', function($scope) {

}])
.controller('DashboardCtrl', ['$scope', function($scope) {
  var chart = c3.generate({
    bindto: '#dashboard_chart',
    data: {
      x: 'x',
      columns: [
        ['x', '2014', '2015', '2016', '2017', '2018', '2019'],
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ],
      axes: {
        data2: 'y2'
      }
    },
    axis: {
      x: {
        show: true
      },
      y2: {
        show: true
      }
    }
  });
}])
.controller('PathFlowCtrl', ['$scope', function($scope) {

	}]);