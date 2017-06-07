(function() {
    'use strict';

    angular.module('starter')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 'RestangularProvider', 'API_URL', 'API_VERSION',
            function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, RestangularProvider, API_URL, API_VERSION) {

                $locationProvider.html5Mode({ enabled: false, requireBase: false });
                $locationProvider.hashPrefix("");


                $urlRouterProvider.otherwise('/dashboard');

                $stateProvider
                    .state('dashboard', {
                        url: '/dashboard',
                        templateUrl: 'modules/main.html'
                    });
                // .state('main.service', {
                //     url: '/main/service',
                //     templateUrl: 'modules/services/main.html'
                // });
                RestangularProvider.setBaseUrl(API_URL + API_VERSION);

            }
        ]);
})();
