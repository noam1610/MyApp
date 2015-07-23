'use strict';
var controllername = 'result';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.game', '$stateParams'];

    function controller(game, $stateParams) {
        var vm = this;
        vm.controllername = fullname;

        game.getSmallPictures()
            .then(function(pictures) {
                vm.pictures = pictures;
            });

        game.getgames()
            .then(function(games) {
                vm.mygames = games;
                vm.game = vm.mygames[$stateParams.id - 1];
            });

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
