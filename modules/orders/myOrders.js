(function() {
    'use strict';

    angular.module('starter')
        .controller('myOrderCtrl', myOrderCtrl);

    myOrderCtrl.$inject = ['$scope', '$stateParams', '$state'];

    function myOrderCtrl($scope, $stateParams, $state) {
        console.log('myOrderCtrl');
        $scope.details = {};
        $scope.lists = [1, 2 ,3, 4, 5, 6];

        
    }
})();
