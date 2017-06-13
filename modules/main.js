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

    MainCtrl.$inject = ['$scope', '$uibModal']

    function MainCtrl($scope, $uibModal) {


        $scope.dynamicPopover = {
            templateUrl: 'myPopoverTemplate.html',
            backdrop: 'static',
            keyboard: false
        };
        $scope.openLoginModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'modules/modals/loginModal.html',
                scope: $scope
            });
            $scope.cancel = function() {
                modalInstance.dismiss('cancel');
            }
        }
        $scope.openSignupModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'modules/modals/signupModal.html',
                scope: $scope
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
    };


})()
