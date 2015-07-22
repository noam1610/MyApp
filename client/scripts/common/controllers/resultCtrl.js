'use strict';
var controllername = 'resultCtrl';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.DataService', '$stateParams'];

    function controller(DataService, $stateParams) {
        var vm = this;
        vm.controllername = fullname;

        DataService.getsmallpictures().then(function(pictures) {
            vm.pictures = pictures;
        });

        DataService.getgames().then(function(games) {
            vm.mygames = games;
            vm.game = vm.mygames[$stateParams.id - 1];
        });

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
