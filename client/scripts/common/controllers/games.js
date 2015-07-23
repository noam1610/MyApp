'use strict';
var controllername = 'games';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [];

    function controller() {
        var vm = this;
        vm.controllername = fullname;

        vm.games = [{
            picture: 'images/app/montagne.jpeg',
            hashtag: 'Mount',
            title: 'Mountain',
            likes: '123',
            id: '1'
        }, {
            picture: 'images/app/foret.jpeg',
            hashtag: 'forest',
            title: 'Run forest',
            likes: '1203',
            id: '2'
        }, {
            picture: 'images/app/navy2.jpeg',
            hashtag: 'Navy',
            title: 'US army',
            likes: '456',
            id: '3'
        }, {
            picture: 'images/app/building2.jpeg',
            hashtag: 'NY',
            title: 'New York',
            likes: '56',
            id: '4'
        }, {
            picture: 'images/app/table.jpeg',
            hashtag: 'SkyTable',
            title: 'Table in the sky',
            likes: '21',
            id: '5'
        }, {
            picture: 'images/app/bush.jpg',
            hashtag: 'Bush',
            title: 'Us republican',
            likes: '123',
            id: '6'
        }];
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
