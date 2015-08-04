'use strict';
var controllername = 'pictures';
// var angular = require('angular');

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$interval', '$window', '$scope', app.name + '.game', app.name + '.instagram', app.name + '.userData', '$ionicLoading'];

    function controller($interval, $window, $scope, game, instagram, userData, $ionicLoading) {
        var vm = this;
        vm.controllername = fullname;

        vm.windowWidth = $window.innerWidth;

        $ionicLoading.show({
            template: 'loading'
        });

        // game.getSmallPictures()
        //     .then(function(pictures) {
        //         vm.pictures = pictures;
        //         instagram.getMedia(userData.access_token)
        //             .then(function(newpictures) {
        //                 vm.pictures = newpictures.concat(vm.pictures);
        //             });
        //     });

        instagram.getImages(userData.access_token)
            .then(function(pictures) {
                vm.pictures = pictures;
                $ionicLoading.hide();
            });

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
