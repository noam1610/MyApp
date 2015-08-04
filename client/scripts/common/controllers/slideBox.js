'use strict';
var controllername = 'slideBox';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.game', app.name + '.instagram', app.name + '.userData', '$stateParams'];

    function controller(game, instagram, userData, $stateParams) {
        var vm = this;
        vm.controllername = fullname;

        instagram.getOneMedia(userData.access_token, $stateParams.id)
            .then(function(game) {
                vm.game = game;
            });

        game.getSmallPictures()
            .then(function(pictures) {
                vm.pictures = pictures;
            });
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
