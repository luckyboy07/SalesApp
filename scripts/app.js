(function() {
    'use strict';

    angular.module('starter', [
            'ngSanitize',
            'ui.router',
            'ui.bootstrap',
            'restangular',
            'angularMoment',
            'ngLetterAvatar',
            'ngMap',
            'ngMaterial',
            'md-steppers',
            'monospaced.qrcode'
        ])
        .constant('API_URL', 'http://localhost:3000')
        .constant('API_VERSION', '/api/1.0/')
})();
