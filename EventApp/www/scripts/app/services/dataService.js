(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataService', dataService);

    function dataService() {
        return {
            event: {
                name: 'Basketball Game',
                location: 'Quicken Loans Arena',
                address: '1 Center Ct',
                city: 'Cleveland',
                state: 'OH',
                zip: '44115'
            }
        };
    }
})();