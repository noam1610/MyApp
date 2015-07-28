'use strict';
var controllername = 'instagram';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$window'];

    function controller($window) {
        var vm = this;
        vm.controllername = fullname;

        vm.open1 = function() {
            if ($window.cordova) {
                $window.open('http://www.instagram.com', '_blank', 'location=yes,hardwareback=no');
            }
        };

        vm.openPhone = function() {
            navigator.startApp.start('com.instagram.android');
        };

        vm.lookFor = function() {
            navigator.startApp.check('com.instagram.android', function(message) {
                    console.log(message);
                    navigator.startApp.start([
                        ['com.instagram.android']
                    ]);
                },
                function(error) {});
        };

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
