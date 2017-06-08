(function() {
    'use strict';

    angular.module('starter')
        .controller('listCtrl', listCtrl);

    listCtrl.$inject = ['$scope', '$stateParams', '$state'];

    function listCtrl($scope, $stateParams, $state) {
        console.log('listCtrl');
        $scope.details = {};
        $scope.lists = [1, 2 ,3, 4, 5, 6];
    }
})();
