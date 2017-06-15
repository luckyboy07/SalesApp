(function() {
    'use strict';

    angular.module('starter')
        .controller('placeOrderCtrl', placeOrderCtrl);

    placeOrderCtrl.$inject = ['$scope', '$stateParams', '$state', '$q'];

    function placeOrderCtrl($scope, $stateParams, $state, $q) {
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

        // $scope.enableNextStep = function nextStep() {
        //     //do not exceed into max step
        //     if ($scope.selectedStep >= $scope.maxStep) {
        //         return;
        //     }
        //     //do not increment $scope.stepProgress when submitting from previously completed step
        //     if ($scope.selectedStep === $scope.stepProgress - 1) {
        //         $scope.stepProgress = $scope.stepProgress + 1;
        //     }
        //     $scope.selectedStep = $scope.selectedStep + 1;
        // }

        // $scope.moveToPreviousStep = function moveToPreviousStep() {
        //     if ($scope.selectedStep > 0) {
        //         $scope.selectedStep = $scope.selectedStep - 1;
        //     }
        // }

        // $scope.submitCurrentStep = function submitCurrentStep(stepData, isSkip) {
        //     var deferred = $q.defer();
        //     $scope.showBusyText = true;
        //     console.log('On before submit');
        //     if (!stepData.completed && !isSkip) {
        //         //simulate $http
        //         $timeout(function() {
        //             $scope.showBusyText = false;
        //             console.log('On submit success');
        //             deferred.resolve({ status: 200, statusText: 'success', data: {} });
        //             //move to next step when success
        //             stepData.completed = true;
        //             $scope.enableNextStep();
        //         }, 1000)
        //     } else {
        //         $scope.showBusyText = false;
        //         $scope.enableNextStep();
        //     }
        // }
    }
})();
