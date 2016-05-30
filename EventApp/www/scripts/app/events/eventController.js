(function () {
    'use strict';

    var place = ""
    var startDate;
    var endDate;
    var title;
    var location;

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

        vm.time = "18:00:00";
        vm.endTime = "20:00:00";

        place = vm.address + " " + vm.city + ", " + vm.state;
        title = "Event " + vm.name;
        location = vm.location;
        var sd = vm.date + " " + vm.time;
        var ed = vm.date + " " + vm.endTime;
        startDate = new Date(sd);
        endDate = new Date(ed);

        document.getElementById('getdirections').addEventListener('click', getDirections);
        document.getElementById('downloadreminder').addEventListener('click', downloadReminderPrompt);
    }

    function getDirections() {
        //navigator.notification.alert('Directions!');
        launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
            var app;
            if (isAvailable) {
                app = launchnavigator.APP.GOOGLE_MAPS;
            } else {
                console.warn("Google Maps not available - falling back to user selection");
                app = launchnavigator.APP.USER_SELECT;
            }
            launchnavigator.navigate(place, {
                app: app
            });
        });
    }

    function downloadReminderPrompt() {
        navigator.notification.confirm('Do you want to download the reminder?',
       downloadReminder, 'Access Calendar', 'Yes, No');
    }

    function downloadReminder(buttonIndex) {
        if (buttonIndex === 1) {
            try {
                window.plugins.calendar.createEvent(title, location, "", startDate, endDate);
                //Tell user
                navigator.notification.alert('Reminder is downloaded!');
            }
            catch (err) {
                navigator.notification.alert('An Error occurred. Unable to download reminder for this device.');
            }
        }

    }

})();