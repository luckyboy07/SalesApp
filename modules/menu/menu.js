(function() {
    'use strict';

    angular.module('starter')
        .controller('menuCtrl', menuCtrl);

    menuCtrl.$inject = ['$scope', '$stateParams', '$state','$rootScope'];

    function menuCtrl($scope, $stateParams, $state,$rootScope) {
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

    }
})();
