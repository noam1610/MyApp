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

        return {
            getToken: getToken
        };

    }

    service.$inject = dependencies;
    app.service(app.name + '.' + servicename, service);

};
