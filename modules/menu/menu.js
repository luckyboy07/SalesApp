(function() {
    'use strict';

    angular.module('starter')
        .controller('menuCtrl', menuCtrl);

    menuCtrl.$inject = ['$scope', '$stateParams', '$state'];

    function menuCtrl($scope, $stateParams, $state) {
        console.log('menuCtrl');
        $scope.details = {};
        $scope.tabs = [
            { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
            { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
        ];
    }
})();
