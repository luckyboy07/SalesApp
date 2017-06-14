(function() {
    'use strict';

    angular.module('starter')
        .controller('orderCtrl', orderCtrl);

    orderCtrl.$inject = ['$scope', '$stateParams', '$state', 'NgMap', '$timeout', '$rootScope'];

    function orderCtrl($scope, $stateParams, $state, NgMap, $timeout, $rootScope) {
        console.log('orderCtrl');
        $rootScope.showuser = false;
        $scope.gridview = true;
        $scope.details = {};
        $scope.lists = [1, 2, 3, 4, 5, 6];
        $scope.initmap = function() {
            console.log('diri')
            $timeout(function() {
                // var vm = this;
                $scope.coo = '8.4807258,124.64481989999999';
                NgMap.getMap().then(function(map) {
                    $scope.showCustomMarker = function(evt) {
                        map.customMarkers.foo.setVisible(true);
                        map.customMarkers.foo.setPosition(getPosition());
                    };
                    $scope.closeCustomMarker = function(evt) {
                        this.style.display = 'none';
                    };
                });
            }, 500)
        }
    }
})();
