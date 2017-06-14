(function() {
    'use strict';

    angular.module('starter')
        .controller('checkoutCtrl', checkoutCtrl);

    checkoutCtrl.$inject = ['$scope', '$stateParams', '$state', 'NgMap'];

    function checkoutCtrl($scope, $stateParams, $state, NgMap) {
        console.log('checkoutCtrl');
        $scope.details = {};
        $scope.lists = [1, 2, 3, 4, 5, 6];
        var vm = this;

        $scope.initmap = function() {
            $scope.coo = '1600 pennsylvania ave, washington DC';
            NgMap.getMap().then(function(map) {
                vm.showCustomMarker = function(evt) {
                    map.customMarkers.foo.setVisible(true);
                    map.customMarkers.foo.setPosition(this.getPosition());
                };
                vm.closeCustomMarker = function(evt) {
                    this.style.display = 'none';
                };
            });
        }

        $scope.initmap();
    }
})();
