(function() {
    'use strict';

    // angular.module('starter')
    //     .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    //         $stateProvider
    //             .state('main', {
    //                 url: '',
    //                 templateUrl: 'modules/calendar/calendar.html',
    //                 controller: 'MainCtrl'
    //             });
    //     }]);

    angular.module('starter')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$uibModal']

    function MainCtrl($scope, $uibModal) {




        $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title-top',
            ariaDescribedBy: 'modal-body-top',
            templateUrl: '../modals/signupModal.html',
            size: 'sm',
            controller: function($scope) {
                $scope.name = 'top';
            }
        });
    };
    angular.module('starter')
        .controller('ModalInstanceCtrl', function($uibModalInstance) {


            $ctrl.ok = function() {
                $uibModalInstance.close($ctrl.selected.item);
            };

            $ctrl.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        });


};)();
