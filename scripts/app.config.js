(function() {
    'use strict';

    angular.module('starter')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 'RestangularProvider', 'API_URL', 'API_VERSION',
            function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, RestangularProvider, API_URL, API_VERSION) {

                $locationProvider.html5Mode({ enabled: false, requireBase: false });
                $locationProvider.hashPrefix("");


                $urlRouterProvider.otherwise('/main/home');

                $stateProvider
                    .state('main', {
                        url: '/main',
                        templateUrl: 'modules/main.html',
                        controller:'MainCtrl'
                    })
                    .state('main.home', {
                        url: '/home',
                        templateUrl: 'modules/home/home.html'
                    });
                RestangularProvider.setBaseUrl(API_URL + API_VERSION);

            }
        ]);
})();
