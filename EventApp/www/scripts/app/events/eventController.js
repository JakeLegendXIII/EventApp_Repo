(function () {
    'use strict';

    angular
        .module('app')
        .controller('eventController', eventController);

    function eventController() {
        var vm = this;

        vm.name = 'Basketball Game';
        vm.location = 'Quicken Loans Arena';
        vm.address = '1 Center Ct';
        vm.city = 'Cleveland';
        vm.state = 'OH';
        vm.zip = '44115'
        vm.date = '6/5/2016'

    }

})();