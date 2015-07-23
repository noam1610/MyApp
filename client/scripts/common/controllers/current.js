'use strict';
var controllername = 'current';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.game', '$state'];

    function controller(game, $state) {
        var vm = this;
        vm.controllername = fullname;

        game.getSmallPictures().then(function(pictures) {
            vm.pictures = pictures;
        });

        game.getgames().then(function(games) {
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
