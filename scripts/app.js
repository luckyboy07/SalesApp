(function() {
    'use strict';

    angular.module('starter', [
            'ngSanitize',
            'ui.router',
            'ui.bootstrap',
            'restangular',
            'angularMoment',
            'ngLetterAvatar'
        ])
        .constant('API_URL', 'http://localhost:3000')
        .constant('API_VERSION', '/api/1.0/')
})();
