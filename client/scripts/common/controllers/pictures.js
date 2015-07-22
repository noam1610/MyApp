'use strict';
var controllername = 'pictures';
// var angular = require('angular');

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$interval', '$window', '$scope', app.name + '.game'];

    function controller($interval, $window, $scope, game) {
        var vm = this;
        vm.controllername = fullname;

        vm.windowWidth = $window.innerWidth;
        game.getSmallPictures()
            .then(function(pictures) {
                vm.pictures = pictures;
            });
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
