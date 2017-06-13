(function() {
    'use strict';

    angular.module('starter')
        .controller('userCtrl', userCtrl);

    userCtrl.$inject = ['$scope', '$stateParams', '$state'];

    function userCtrl($scope, $stateParams, $state) {
        console.log('userCtrl');
        $scope.details = {};
        $scope.lists = [1, 2 ,3, 4, 5, 6];

        $scope.changeView = function(view) {
        	$scope.showDiv = view;
        }
    }
})();
