'use strict';
var servicename = 'instagram';
var _ = require('lodash');

module.exports = function(app) {

    var dependencies = ['$http', '$q', '$window'];

    function service($http, $q, $window) {

        var req = {
            method: 'GET',
            url: 'https://instagram.com/oauth/authorize/?client_id=79e34d8d4f7543d2bb007ed6b453b702&redirect_uri=http://localhost:5000/&response_type=token',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };

        var getToken = function() {
            var deferred = $q.defer();
            var ref = $window.open(req.url, '_blank', 'location=no');

            var requestToken;
            ref.addEventListener('loadstart', function(event) {
                if (_.startsWith(event.url, document.location.origin + '/#access_token') || _.startsWith(event.url, 'http://localhost:5000/#access_token')) {
                    requestToken = event.url.split('access_token=')[1];
                    ref.close();
                    deferred.resolve(requestToken);
                }
            });
            return deferred.promise;

        };

        var getMedia = function(token) {

            var urlM = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=';
            return $http.jsonp(urlM + token + '&callback=JSON_CALLBACK')
                .then(function(response) {
                    // alert(JSON.stringify(data.data.data));
                    // return response.data.data;
                    return response.data.data;
                })
                .then(function(images) {
                    return _.map(images, function(image) {

                        return {
                            url: image.images.standard_resolution.url,
                            hashtag: image.user && image.user.username ? image.user.username : null
                        };
                    });
                });
        };

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
        };

        var games = [{
            picture: 'images/app/montagne.jpeg',
            hashtag: 'Mount',
            title: 'Mountain',
            likes: '123',
            id: '1',
            likelihood: '42'
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

        var getImages = function(token) {

            var promise = [getMedia(token), getSmallPictures()];

            return $q.all(promise)
                .then(function(data) {
                    return data[0].concat(data[1]);
                });

        };

        return {
            getToken: getToken,
            getMedia: getMedia,
            getSmallPictures: getSmallPictures,
            getGames: getGames,
            getImages: getImages
        };

    }

    service.$inject = dependencies;
    app.service(app.name + '.' + servicename, service);

};
