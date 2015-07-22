'use strict';
var controllername = 'encoursCtrl';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.DataService', '$state'];

    function controller(DataService, $state) {
        var vm = this;
        vm.controllername = fullname;

        DataService.getsmallpictures().then(function(pictures) {
            vm.pictures = pictures;
        });

        DataService.getgames().then(function(games) {
            vm.games = games;
        });

        vm.goTo = function(id) {
            var x = Math.random();
            if (x < 0.5) {
                $state.go('tab.result', {
                    'id': id
                });
            }
            if (x > 0.5) {
                $state.go('tab.success', {
                    'id': id
                });
            }
        }
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
