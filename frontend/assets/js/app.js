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
  $scope.opt = {
    subsidizedPerc: 50
  }
  $scope.showAddOpt = false;
  $scope.opts = ['loans', 'car'];
  $scope.carYears = [];
  $scope.carPrices = [5000, 10000, 15000, 20000, 30000, 50000, 70000, 100000];
  for (var i = 2014; i < 2030; i++) {
    $scope.carYears.push(i);
  }


  $scope.chart = c3.generate({
    bindto: '#dashboard_chart',
    data: {
      x: 'x',
      columns: [
      ['x', '2014', '2015', '2016', '2017', '2018', '2019'],
       // ['data1', 80000 200, 100, 400, 150, 250],
       // ['data2', 50, 20, 10, 40, 15, 25],
       // ['data3', 50]
       ]
     },
     axis: {
      x: {
        show: true
      }
    }
  });

  $scope.$watch('opt.subsidizedPerc', function() {
    if($scope.opt.subsidizedPerc <= 100 && $scope.opt.subsidizedPerc>=0)  {
      var totalArr = calcTotal("UTA", $scope.opt.subsidizedPerc/100, 800);
      var returnArr = new Array();
      var yearArr = new Array();
      yearArr.push('x');
      returnArr.push('data2');
     // console.log(totalArr);
     for(var i = 0; i < totalArr.length; i ++)  {
      yearArr.push(2014+i);
      returnArr.push(totalArr[i].toFixed(2));
    }
    console.log(returnArr);
    $scope.chart.load({
      columns: [
      yearArr,
      returnArr,
        //  ['data3', $scope.opt.subsidizedPerc, $scope.opt.subsidizedPerc * 2, $scope.subsidizedPerc * -1]
        ]
      });
  }
}, true);

  $scope.showHideAddOpt = function() {
    if ($scope.showAddOpt) {
      $scope.showAddOpt = '';
    }
    $scope.showAddOpt = !$scope.showAddOpt;
  }
}])
.controller('CollegeFlowCtrl', ['$scope', function($scope) {
}])

.controller('PathFlowCtrl', ['$scope','Major', 'College', function($scope, Major, College) {
  $scope.majors = Major.query();
  $scope.orderProp = 'Total';
  $scope.colleges = College.query();
  $scope.collegeSelected = false;
  $scope.majorSelected = false;

  $scope.universityClick = function(collegeId){
    $scope.collegeSelected = true;
    $scope.myCollege = collegeId;
  }

  $scope.majorClick = function(majorId){
    $scope.majorSelected = true;
    $scope.myMajor = majorId;
  }


}]);