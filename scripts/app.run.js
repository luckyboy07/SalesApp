(function() {
    'use strict';

    angular.module('starter')
        .run(['$rootScope', function($rootScope,$state) {
        	 $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
        	 	console.log('toState;',toState)
        	 });
        }]);
})();
