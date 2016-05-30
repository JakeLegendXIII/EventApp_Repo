(function () {
    'use strict';

    angular
        .module('app')
        .config(appConfig);

    appConfig.$inject = ['$routeProvider'];

    function appConfig($routeProvider) {
        $routeProvider.when('/', {
            controller: 'eventController',
            controllerAs: 'vm',
            templateUrl: 'scripts/app/events/eventView.html'
        });

        $routeProvider.when('/settings', {
            controller: 'settingController',
            controllerAs: 'vm',
            templateUrl: 'scripts/app/settings/settingView.html'
        });

        $routeProvider.otherwise({ redirectTo: '/' });
    }

})();