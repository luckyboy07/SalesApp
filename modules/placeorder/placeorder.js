(function() {
    'use strict';

    angular.module('starter')
        .controller('placeOrderCtrl', placeOrderCtrl);

    placeOrderCtrl.$inject = ['$scope', '$stateParams', '$state', '$q','$timeout','NgMap'];

    function placeOrderCtrl($scope, $stateParams, $state, $q,$timeout,NgMap) {
        // $scope.$mdStepper = $mdStepper;
        console.log('placeOrderCtrl');
        $scope.details = {};
        $scope.lists = [1, 2, 3, 4, 5, 6];

        $scope.selectedStep = 0;
        $scope.stepProgress = 1;
        $scope.maxStep = 3;
        $scope.showBusyText = false;
        $scope.stepData = [
            { step: 1, completed: false, optional: false, data: {} },
            { step: 2, completed: false, optional: false, data: {} },
            { step: 3, completed: false, optional: false, data: {} },
        ];

        $scope.time = "1970-01-01T02:35:40.000Z"; // (formatted: 10:35 AM)
        $scope.selectedTimeAsNumber = 37840000; // (formatted: 6:30 PM)
        $scope.sharedDate = "2017-06-19T01:00:00.773Z"; // (formatted: 6/19/17 9:00 AM)

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
        };
        $scope.initmap();
    }
})();
