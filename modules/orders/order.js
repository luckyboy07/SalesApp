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

        $scope.stores = [{
            "Name": "Barkadahan Grill",
            "image": "Barkstore.png"
        }, {
            "Name": "BigBy's",
            "image": "Bigstore.png"
        }, {
            "Name": "Boy Zugba",
            "image": "Boystore.png"
        }, {
            "Name": "Countryside",
            "image": "Countstore.png"
        }, {
            "Name": "Jollibee",
            "image": "jolistore.png"
        }, {
            "Name": "Mcdonald's",
            "image": "McStore.png"
        }];

        $scope.storesList = [{
            "Name": "Barkadahan Grill",
            "image": "barsm.png"
        }, {
            "Name": "BigBy's",
            "image": "bigsm.png"
        }, {
            "Name": "Boy Zugba",
            "image": "boysm.png"
        }, {
            "Name": "Countryside",
            "image": "sunsm.png"
        }, {
            "Name": "Jollibee",
            "image": "jolsm.png"
        }, {
            "Name": "Mcdonald's",
            "image": "Mcsm.png"
        }]

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
