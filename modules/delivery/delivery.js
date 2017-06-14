(function() {
    'use strict';

    angular.module('starter')
        .controller('deliveryCtrl', deliveryCtrl);

    deliveryCtrl.$inject = ['$scope', '$stateParams', '$state', 'NgMap'];

    function deliveryCtrl($scope, $stateParams, $state, NgMap) {
        console.log('deliveryCtrl');
        $scope.details = {};
        $scope.lists = [1, 2, 3, 4, 5, 6];

    }
})();
