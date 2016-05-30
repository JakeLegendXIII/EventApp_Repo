(function () {
    'use strict';

    angular
        .module('app')
        .controller('settingController', settingController);

    function settingController() {
        var vm = this;

        vm.buttonText = 'Click to learn more about TACO!';
    }

})();