(function() {
    'use strict';

    angular.module('starter')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 'RestangularProvider', 'API_URL', 'API_VERSION',
            function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, RestangularProvider, API_URL, API_VERSION) {

                $locationProvider.html5Mode({ enabled: false, requireBase: false });
                $locationProvider.hashPrefix("");


                $urlRouterProvider.otherwise('/main/orders');

                $stateProvider


                    .state('main', {
                        url: '/main',
                        templateUrl: 'modules/main.html',
                        controller: 'MainCtrl'
                    })
                    .state('main.home', {
                        url: '/home',
                        templateUrl: 'modules/home/home.html',
                        controller: 'homeCtrl'
                    })
                    .state('main.restolist', {
                        url: '/restolist',
                        templateUrl: 'modules/users/user.html',
                        controller: 'listCtrl'
                    })
                    .state('main.orders', {
                        url: '/orders',
                        templateUrl: 'modules/orders/orders.html',
                        controller: 'orderCtrl'
                    })
                    .state('main.users', {
                        url: '/users',
                        templateUrl: 'modules/users/users.html',
                        controller: 'userCtrl'
                    })
                    .state('main.my-orders', {
                        url: '/my-orders',
                        templateUrl: 'modules/orders/myOrders.html',
                        controller: 'myOrderCtrl'
                    })
                    .state('main.checkout', {
                        url: '/checkout',
                        templateUrl: 'modules/checkout/checkout.html',
                        controller: 'checkoutCtrl'
                    })
                    .state('main.menu', {
                        url: '/menu',
                        templateUrl: 'modules/menu/menu.html',
                        controller: 'menuCtrl'
                    })
                    .state('main.delivery', {
                        url: '/delivery',
                        templateUrl: 'modules/delivery/delivery.html',
                        controller: 'deliveryCtrl'
                    })
                    .state('main.placeorder', {
                        url: '/placeorder',
                        templateUrl: 'modules/placeorder/placeorder.html',
                        controller: 'placeOrderCtrl'
                    })
                    .state('main.proof', {
                        url: '/pop',
                        templateUrl: 'modules/proof/proof.html',
                        controller: 'proofCtrl'
                    });
                RestangularProvider.setBaseUrl(API_URL + API_VERSION);

            }
        ]);
})();
