'use strict';
var controllername = 'pictures';
// var angular = require('angular');

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$interval', '$window', '$scope', app.name + '.DataService'];

    function controller($interval, $window, $scope, dataService) {
        var vm = this;
        vm.controllername = fullname;

        // var win = angular.element($window);
        // win.bind('resize', function(e) {
        //     vm.windowWidth = $window.innerWidth;
        //     $scope.$digest();
        //     //console.log(" Window resized! ");
        //     // Your relevant code here...
        // });

        vm.windowWidth = $window.innerWidth;
        dataService.getsmallpictures().then(function(pictures) {
            $interval(function() {
                vm.pictures = pictures;
            }, 0);
        });

        // vm.pictures = [{
        //     url: 'images/app/montagne.jpeg',
        //     hashtag: 'mount'
        // }, {
        //     url: 'images/app/foret.jpeg',
        //     hashtag: 'forest'
        // }, {
        //     url: 'images/app/desert.jpeg',
        //     hashtag: 'desert'
        // }, {
        //     url: 'images/app/sarko.jpeg',
        //     hashtag: 'sarko'
        // }, {
        //     url: 'images/app/bateau.jpeg',
        //     hashtag: 'boat'
        // }, {
        //     url: 'images/app/table.jpeg',
        //     hashtag: 'table'
        // }, {
        //     url: 'images/app/world2.jpeg',
        //     hashtag: 'world'
        // }, {
        //     url: 'images/app/navy2.jpeg',
        //     hashtag: 'navy'
        // }, {
        //     url: 'images/app/world.jpeg',
        //     hashtag: 'world'
        // }, {
        //     url: 'images/app/building.jpeg',
        //     hashtag: 'NY'
        // }, {
        //     url: 'images/app/building2.jpeg',
        //     hashtag: 'NY district'
        // }, {
        //     url: 'images/app/obama.jpeg',
        //     hashtag: 'obama'
        // }, {
        //     url: 'images/app/hollande.jpeg',
        //     hashtag: 'hollande'
        // }, {
        //     url: 'images/app/navy.jpeg',
        //     hashtag: 'navy'
        // }, {
        //     url: 'images/app/collage.jpg',
        //     hashtag: 'collage'
        // }];
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
