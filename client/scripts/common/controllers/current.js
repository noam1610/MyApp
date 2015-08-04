'use strict';
var controllername = 'current';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.game', '$state', app.name + '.instagram', app.name + '.userData'];

    function controller(game, $state, instagram, userData) {
        var vm = this;
        vm.controllername = fullname;

        game.getSmallPictures().then(function(pictures) {
            vm.pictures = pictures;
        });

        instagram.getMediaComplete(userData.access_token)
            .then(function(pictures) {
                vm.games = pictures;
            });

        // game.getGames().then(function(games) {
        //     vm.games = games;
        // });

        vm.goTo = function(id) {

            $state.go('tab.slideBoxSuccess', {
                'id': id
            });

            var x = Math.random();

            if (x < 0.5) {
                $state.go('tab.slideBoxSuccess', {
                    'id': id
                });
            }
            if (x > 0.5) {
                $state.go('tab.slideBoxResult', {
                    'id': id
                });
            }
        };
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
