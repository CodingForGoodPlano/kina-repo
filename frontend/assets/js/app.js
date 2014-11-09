'use strict';

angular.module('app', ['ngRoute', 'frontendServices'])
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
      templateUrl: 'about.html'
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
  $scope.subsidizedPerc = 50;
  $scope.showAddOpt = false;
  $scope.opts = ['loans', 'college', 'car'];


  $scope.chart = c3.generate({
    bindto: '#dashboard_chart',
    data: {
      x: 'x',
      columns: [
        ['x', '2014', '2015', '2016', '2017', '2018', '2019'],
        ['data1', 20, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25],
        ['data3', 50]
      ]
    },
    axis: {
      x: {
        show: true
      }
    }
  });

  $scope.$watch('subsidizedPerc', function() {
    $scope.chart.load({
      columns: [
        ['data3', $scope.subsidizedPerc, $scope.subsidizedPerc * 2, $scope.subsidizedPerc * -1]
      ]
    });
  }, true);

  $scope.showHideAddOpt = function() {
    if ($scope.showAddOpt) {
      $scope.showAddOpt = '';
    }
    $scope.showAddOpt = !$scope.showAddOpt;
  }
}])
.controller('PathFlowCtrl', ['$scope','College', function($scope, College) {
      $scope.colleges = College.query();
      $scope.orderProp = 'Total';
}]);