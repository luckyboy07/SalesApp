(function() {
    'use strict';

    angular.module('starter')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', '$stateParams', '$state', '$rootScope'];

    function homeCtrl($scope, $stateParams, $state, $rootScope) {
        $scope.displaytrans = true;
        console.log('homeCtrl', $rootScope.showuser);
        console.log('homeCtrl', $scope.displaytrans);

    }
})();
