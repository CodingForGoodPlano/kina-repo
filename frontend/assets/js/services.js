/**
 * Created by Jake on 11/9/2014.
 */
var frontendServices = angular.module('frontendServices', ['ngResource']);

frontendServices.factory('College', ['$resource',
    function($resource){
        return $resource('https://w2BDzv0cFr6I32ojesQdTd8RBhW4QPI4hh2xgPww:javascript-key=Pzb9febt2haOjkldiKR0wdHvXxsI1otEIGfkZLBA@api.parse.com/1/classes/SchoolInfo', {}, {
            query: {method:'GET', isArray:true}
        });
    }]);