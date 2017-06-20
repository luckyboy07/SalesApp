(function() {
    'use strict';

    angular.module('starter')
        .controller('proofCtrl', proofCtrl);

    proofCtrl.$inject = ['$scope', '$stateParams', '$state', 'NgMap', '$timeout', '$rootScope'];

    function proofCtrl($scope, $stateParams, $state, NgMap, $timeout, $rootScope) {
        console.log('proofCtrl');
       
    }
})();
