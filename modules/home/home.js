(function() {
    'use strict';

    angular.module('starter')
        .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
            $stateProvider
                .state('main.calendars', {
                    url: '/calendars',
                    templateUrl: 'modules/calendar/calendar.html',
                    controller: 'calendarCtrl'
                });
        }]);
})();
