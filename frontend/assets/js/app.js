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
  $scope.opts = ['loans', 'car', 'major'];
  $scope.carYears = [];
  $scope.carPrices = [5000, 10000, 15000, 20000, 30000, 50000, 70000, 100000];
  for (var i = 2014; i < 2030; i++) {
    $scope.carYears.push(i);
  }
  $scope.majors=[
    'Petroleum Engineering',
    'Liberal Arts',
    'Mathematics',
    'Electrical Engineering',
    'Economics',
    'Computer Science',
    'Business Administration',
    'Biology',
    'Art',
    'Accounting'
  ];
  $scope.opt.salaries = []
  $scope.opt.salaries["Petroleum Engineering"] = [103000, 160000, 215200];        
  $scope.opt.salaries["Liberal Arts"] = [36600, 60500, 60700];        
  $scope.opt.salaries["Mathematics"] = [49400, 88000, 143570];        
  $scope.opt.salaries["Electrical Engineering"] = [64300, 106000, 131200];        
  $scope.opt.salaries["Economics"] = [50100, 96700, 154150];        
  $scope.opt.salaries["Computer Science"] = [59800, 102000, 134100];        
  $scope.opt.salaries["Business Administration"] = [43500, 71000, 121000];        
  $scope.opt.salaries["Biology"] = [40200, 70800, 163000];        
  $scope.opt.salaries["Art"] = [36100, 57100, 71240];
  $scope.opt.salaries["Accounting"] = [45300, 74900, 125100];


  $scope.chart = c3.generate({
    bindto: '#dashboard_chart',
    data: {
      x: 'x',
      columns: [
      ['x', '2014', '2015', '2016', '2017', '2018', '2019'],
       // ['data1', 80000 200, 100, 400, 150, 250],
       // ['data2', 50, 20, 10, 40, 15, 25],
       // ['data3', 50]
       ],
       axes: {
        salary: 'y2'
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

  
 $scope.$watch('opt.carPrice', function() {

    console.log('caryear');

    var yearArr = new Array();
    var carArr = new Array();



    yearArr.push('x');
    carArr.push('Car Loan');
    for(var i = 2014; i < $scope.opt.carYear; i++ ) {
      yearArr.push(i);
      carArr.push(0);
    }
    yearArr.push($scope.opt.carYear);
    yearArr.push($scope.opt.carYear +1);
    yearArr.push($scope.opt.carYear + 2);
    yearArr.push($scope.opt.carYear +3);
    yearArr.push($scope.opt.carYear +4);

    carArr.push($scope.opt.carPrice);
    carArr.push($scope.opt.carPrice * 3/4);
    carArr.push($scope.opt.carPrice/2);
    carArr.push($scope.opt.carPrice/4);
    carArr.push(0);

    $scope.chart.load({
      columns: [
      yearArr,
      carArr
        //  ['data3', $scope.opt.subsidizedPerc, $scope.opt.subsidizedPerc * 2, $scope.subsidizedPerc * -1]
        ]
      });

  });

  $scope.$watch('opt.carYear', function() {
    console.log('caryear');

    var yearArr = new Array();
    var carArr = new Array();

    yearArr.push('x');
    carArr.push('Car Loan');
    for(var i = 2014; i < $scope.opt.carYear; i++ ) {
      yearArr.push(i);
      carArr.push(0);
    }
    yearArr.push($scope.opt.carYear);
    yearArr.push($scope.opt.carYear +1);
    yearArr.push($scope.opt.carYear + 2);
    yearArr.push($scope.opt.carYear +3);
    yearArr.push($scope.opt.carYear +4);

    carArr.push($scope.opt.carPrice);
    carArr.push($scope.opt.carPrice * 3/4);
    carArr.push($scope.opt.carPrice/2);
    carArr.push($scope.opt.carPrice/4);
    carArr.push(0);

    $scope.chart.load({
      columns: [
      yearArr,
      carArr
        //  ['data3', $scope.opt.subsidizedPerc, $scope.opt.subsidizedPerc * 2, $scope.subsidizedPerc * -1]
        ]
      });

  });

  $scope.$watch('opt.loanPayment', function() {
   if($scope.opt.subsidizedPerc <= 100 && $scope.opt.subsidizedPerc>=0 && $scope.opt.loanPayment > 500)  {
      var totalArr = calcTotal("UTA", $scope.opt.subsidizedPerc/100, $scope.opt.loanPayment);
      var returnArr = new Array();
      var yearArr = new Array();
      yearArr.push('x');
      returnArr.push('Loan Debt');
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

  
  $scope.$watch('opt.subsidizedPerc', function() {
    if($scope.opt.subsidizedPerc <= 100 && $scope.opt.subsidizedPerc>=0 && $scope.opt.loanPayment> 500)  {
      var totalArr = calcTotal("UTA", $scope.opt.subsidizedPerc/100, $scope.opt.loanPayment);
      var returnArr = new Array();
      var yearArr = new Array();
      yearArr.push('x');
      returnArr.push('Loan Debt');
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

  $scope.$watch('opt.major', function() {
    if ($scope.opt.major !== undefined) {
    var arr = ['salary: ' + $scope.opt.major, 0, 0, 0];
    arr.push.apply(arr, $scope.opt.salaries[$scope.opt.major]);
    $scope.chart.load({
      columns: [
        arr
      ]
    });
  }
  })
}])
.controller('CollegeFlowCtrl', ['$scope', function($scope) {
}])

.controller('PathFlowCtrl', ['$scope','Major', 'College', function($scope, Major, College) {
  $scope.majors = Major.query();
  $scope.orderProp = 'Total';
  $scope.colleges = College.query();
  $scope.collegeSelected = false;
  $scope.majorSelected = false;
    var total = 0;
        var majorPercentage = 0;

  $scope.universityClick = function(college){
    $scope.collegeSelected = true;
    $scope.myCollege = college;
      total = $scope.myCollege.Total;

  };

  $scope.majorClick = function(major){
    $scope.majorSelected = true;
    $scope.myMajor = major;
      majorPercentage = ($scope.myMajor.StartingSalary / 12) * .25;
      $scope.chart = c3.generate({
          bindto: '#college-major-chart',
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

      var totalArr = calcTotalParse(total,.045, majorPercentage);
      var returnArr = new Array();
      var yearArr = new Array();
      yearArr.push('x');
      returnArr.push('debt');
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

  };




}]);