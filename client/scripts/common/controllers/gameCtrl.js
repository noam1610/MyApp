'use strict';
var controllername = 'gameCtrl';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$stateParams'];

    function controller($stateParams) {
        var vm = this;
        vm.controllername = fullname;

        vm.pictures = [{
            url: 'images/app/montagne.jpeg',
            hashtag: 'mount'
        }, {
            url: 'images/app/foret.jpeg',
            hashtag: 'forest'
        }, {
            url: 'images/app/desert.jpeg',
            hashtag: 'desert'
        }, {
            url: 'images/app/sarko.jpeg',
            hashtag: 'sarko'
        }, {
            url: 'images/app/bateau.jpeg',
            hashtag: 'boat'
        }, {
            url: 'images/app/table.jpeg',
            hashtag: 'table'
        }, {
            url: 'images/app/world2.jpeg',
            hashtag: 'world'
        }, {
            url: 'images/app/navy2.jpeg',
            hashtag: 'navy'
        }, {
            url: 'images/app/world.jpeg',
            hashtag: 'world'
        }, {
            url: 'images/app/building.jpeg',
            hashtag: 'NY'
        }, {
            url: 'images/app/building2.jpeg',
            hashtag: 'NY district'
        }, {
            url: 'images/app/obama.jpeg',
            hashtag: 'obama'
        }, {
            url: 'images/app/hollande.jpeg',
            hashtag: 'hollande'
        }, {
            url: 'images/app/navy.jpeg',
            hashtag: 'navy'
        }, {
            url: 'images/app/collage.jpg',
            hashtag: 'collage'
        }];

        var myData = [{
            picture: 'images/app/montagne.jpeg',
            hashtag: 'Mount',
            title: 'Mountain',
            likes: '123'
        }, {
            picture: 'images/app/foret.jpeg',
            hashtag: 'forest',
            title: 'Run forest',
            likes: '1203'
        }, {
            picture: 'images/app/navy2.jpeg',
            hashtag: 'Navy',
            title: 'US army',
            likes: '456'
        }, {
            picture: 'images/app/building2.jpeg',
            hashtag: 'NY',
            title: 'New York',
            likes: '56'
        }, {
            picture: 'images/app/table.jpeg',
            hashtag: 'SkyTable',
            title: 'Table in the sky',
            likes: '21'
        }, {
            picture: 'images/app/bush.jpg',
            hashtag: 'Bush',
            title: 'Us republican',
            likes: '123'
        }];
        vm.myData = myData[$stateParams.id - 1];
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
