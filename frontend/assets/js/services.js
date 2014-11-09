/**
 * Created by Jake on 11/9/2014.
 */
var frontendServices = angular.module('frontendServices', ['ngResource']);

frontendServices.factory('Major', ['$resource', '$http',
    function($resource, $http){
        $http.defaults.headers.common['X-Parse-Application-Id'] = 'w2BDzv0cFr6I32ojesQdTd8RBhW4QPI4hh2xgPww';
        $http.defaults.headers.common['X-Parse-REST-API-Key'] = 'Pc3KfpxfSR3V2HzGXELmOV5PII6e8Ggaby5a3QOn';
        return $resource('https://api.parse.com/1/classes/Majors', {}, {
            query: {method:'GET'}
        });
    }]);
frontendServices.factory('College', ['$resource', '$http',
    function($resource, $http){
        $http.defaults.headers.common['X-Parse-Application-Id'] = 'w2BDzv0cFr6I32ojesQdTd8RBhW4QPI4hh2xgPww';
        $http.defaults.headers.common['X-Parse-REST-API-Key'] = 'Pc3KfpxfSR3V2HzGXELmOV5PII6e8Ggaby5a3QOn';
        return $resource('https://api.parse.com/1/classes/SchoolInfo', {}, {
            query: {method:'GET'}
        });
    }]);