(function() {
    'use strict';

    angular.module('starter')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', '$stateParams', '$state', '$rootScope','$uibModal'];

    function homeCtrl($scope, $stateParams, $state, $rootScope,$uibModal) {
        $scope.displaytrans = true;
        console.log('homeCtrl', $rootScope.showuser);
        console.log('homeCtrl', $scope.displaytrans);
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
    }
})();
