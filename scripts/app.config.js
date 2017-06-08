(function() {
    'use strict';

    angular.module('starter')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 'RestangularProvider', 'API_URL', 'API_VERSION',
            function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, RestangularProvider, API_URL, API_VERSION) {

                $locationProvider.html5Mode({ enabled: false, requireBase: false });
                $locationProvider.hashPrefix("");


                $urlRouterProvider.otherwise('/main/menu');

                $stateProvider

                    
                    .state('main', {
                        url: '/main',
                        templateUrl: 'modules/main.html',
                        controller:'MainCtrl'
                    })
                    .state('main.home', {
                        url: '/home',
                        templateUrl: 'modules/home/home.html'
                    })
                    .state('main.restolist', {
                        url: '/restolist',
                        templateUrl: 'modules/users/user.html',
                        controller: 'listCtrl'
                    })
                    .state('main.orders', {
                        url: '/orders',
                        templateUrl: 'modules/orders/orders.html'
                    })
                    .state('main.menu', {
                        url: '/menu',
                        templateUrl: 'modules/menu/menu.html'
                    });
                RestangularProvider.setBaseUrl(API_URL + API_VERSION);

            }
        ]);
})();
