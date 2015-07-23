'use strict';
var servicename = 'game';
//var _ = require('lodash');
module.exports = function(app) {

    var dependencies = ['$q', '$http'];

    function service($q, $http) {

        var smallpictures = [{
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

        var getSmallPictures = function() {
            var deferred = $q.defer();
            deferred.resolve(smallpictures);
            return deferred.promise;

            // return $http.get('http://api.randomuser.me/?results=30')
            //     .then(function(data) {
            //         return data.data.results;
            //     })
            //     .then(function(results) {
            //         return _.map(results, function(result) {
            //             return {
            //                 url: result.user.picture.large,
            //                 hashtag: result.user.location.city
            //             };
            //         });
            //     });
        };
        var games = [{
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
            id: '2',
            likelihood: '33'
        }, {
            picture: 'images/app/navy2.jpeg',
            hashtag: 'Navy',
            title: 'US army',
            likes: '456',
            id: '3',
            likelihood: '52'
        }, {
            picture: 'images/app/building2.jpeg',
            hashtag: 'NY',
            title: 'New York',
            likes: '56',
            id: '4',
            likelihood: '23'
        }, {
            picture: 'images/app/table.jpeg',
            hashtag: 'SkyTable',
            title: 'Table in the sky',
            likes: '21',
            id: '5',
            likelihood: '93'
        }, {
            picture: 'images/app/bush.jpg',
            hashtag: 'Bush',
            title: 'Us republican',
            likes: '123',
            id: '6',
            likelihood: '16'
        }];

        var getGames = function() {
            var deferred = $q.defer();
            deferred.resolve(games);
            return deferred.promise;
        };

        return {
            getSmallPictures: getSmallPictures,
            getGames: getGames
        };

    }

    service.$inject = dependencies;
    app.service(app.name + '.' + servicename, service);

};
