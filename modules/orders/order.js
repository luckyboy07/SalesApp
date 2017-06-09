(function() {
    'use strict';

    angular.module('starter')
        .controller('orderCtrl', orderCtrl);

    orderCtrl.$inject = ['$scope', '$stateParams', '$state'];

    function orderCtrl($scope, $stateParams, $state) {
        console.log('orderCtrl');
        $scope.details = {};
        $scope.lists = [1, 2 ,3, 4, 5, 6];
    }
})();
