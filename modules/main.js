(function() {
    'use strict';

    // angular.module('starter')
    //     .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    //         $stateProvider
    //             .state('main', {
    //                 url: '',
    //                 templateUrl: 'modules/calendar/calendar.html',
    //                 controller: 'MainCtrl'
    //             });
    //     }]);

    angular.module('starter')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$uibModal', '$rootScope','$state']

    function MainCtrl($scope, $uibModal, $rootScope,$state) {
        $rootScope.showuser = false;

        $scope.dynamicPopover = {
            templateUrl: 'myPopoverTemplate.html',
            backdrop: 'static',
            keyboard: false
        };
        $scope.openLoginModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'modules/modals/loginModal.html',
                scope: $scope,
                size: 'lg'
            });
            $scope.cancel = function() {
                $rootScope.showuser = true;
                modalInstance.dismiss('cancel');
            }
        }
        $scope.openSignupModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'modules/modals/signupModal.html',
                scope: $scope,
                size: 'lg'
            });
            $scope.cancel = function() {
                modalInstance.dismiss('cancel');
            }
        }

        $scope.openMyordersModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'modules/modals/myordersModal.html',
                scope: $scope
            });
            $scope.cancel = function() {
                modalInstance.dismiss('cancel');
            }
        }
        $scope.openMenuModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'modules/modals/menuModal.html',
                scope: $scope
            });
            $scope.cancel = function() {
                modalInstance.dismiss('cancel');
            }
        }
        $scope.cartModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'modules/modals/cartModal.html',
                scope: $scope,
                size: 'lg'
            });
            $scope.cancel = function() {
                modalInstance.dismiss('cancel');
            }
        }
    };


})()
