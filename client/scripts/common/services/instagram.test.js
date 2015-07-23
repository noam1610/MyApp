'use strict';
/*eslint consistent-this:[0] */
var angular = require('angular');
require('angular-mocks');
var imageInstagram = require('../../../../test/unit/fixtures/imageInstagram.js');
var app = require('../')('app');
var servicename = 'instagram';
describe(app.name, function() {

    describe('Services', function() {

        describe(servicename, function() {

            beforeEach(function() {
                angular.mock.module(app.name);

            });

            beforeEach(inject(function($injector) {
                this.service = $injector.get(app.name + '.' + servicename);
                this.$rootScope = $injector.get('$rootScope');
                this.$httpBackend = $injector.get('$httpBackend');
            }));

            it('should be defined', function() {
                expect(this.service).toBeDefined();
            });

            it('getMedia should succeed', function(done) {
                var accessToken = 'toto';
                this.$httpBackend
                    .whenJSONP('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + accessToken + '&callback=JSON_CALLBACK')
                    .respond(imageInstagram);

                this.service.getMedia(accessToken)
                    .then(function(pictures) {
                        // expect(pictures.length).toBe(2);
                        // expect(pictures[0].url).toBe(imageInstagram.data[0].images.standard_resolution.url);

                        // expect(pictures[0].hashtag).toEqual(imageInstagram.data[0].caption.from.username);
                        // expect(pictures[1].hashtag).toEqual(null);

                        done();
                    }, done);

                this.$httpBackend.flush();
            });

            it('getImages should succeed', function(done) {
                var accessToken = 'toto';
                this.$httpBackend
                    .whenJSONP('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + accessToken + '&callback=JSON_CALLBACK')
                    .respond(imageInstagram);

                this.service.getImages(accessToken)
                    .then(function(pictures) {
                        expect(pictures.length).toBe(17);
                        done();
                    }, done);

                this.$rootScope.$apply();
                this.$httpBackend.flush();

            });
        });
    });
});
