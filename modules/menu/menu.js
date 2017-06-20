(function() {
    'use strict';

    angular.module('starter')
        .controller('menuCtrl', menuCtrl);

    menuCtrl.$inject = ['$scope', '$stateParams', '$state','$rootScope','$timeout','NgMap'];

    function menuCtrl($scope, $stateParams, $state,$rootScope,$timeout,NgMap) {
        $rootScope.showuser = true;
        console.log('menuCtrl',$rootScope.showuser  );
        $scope.details = {};
        $scope.tabs = [
            { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
            { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
        ];
        $scope.records = [{
            "Name": "Alfreds F",
            "Country": "Germany"
        }, {
            "Name": "Berglunds S",
            "Country": "Sweden"
        }, {
            "Name": "Centro M",
            "Country": "Mexico"
        }, {
            "Name": "Ernst H",
            "Country": "Austria"
        }]
        $scope.Menus = [{
            "Name": "Meaty Cheese Burger",
            "image": "burgerList.png"
        }, {
            "Name": "Meaty Cheese Burger",
            "image": "burgerList.png"
        }, {
            "Name": "Meaty Cheese Burger",
            "image": "burgerList.png"
        }, {
            "Name": "Meaty Cheese Burger",
            "image": "burgerList.png"
        }, {
            "Name": "Meaty Cheese Burger",
            "image": "burgerList.png"
        }, {
            "Name": "Meaty Cheese Burger",
            "image": "burgerList.png"
        }];

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
