(function() {
    'use strict';

    angular.module('starter')
        .controller('checkoutCtrl', checkoutCtrl);

    checkoutCtrl.$inject = ['$scope', '$stateParams', '$state'];

    function checkoutCtrl($scope, $stateParams, $state) {
        console.log('checkoutCtrl');
        $scope.details = {};
        $scope.lists = [1, 2 ,3, 4, 5, 6];
    }
})();
