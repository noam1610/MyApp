'use strict';
/*eslint consistent-this:[0] */
var angular = require('angular');
require('angular-mocks');
var app = require('../')('app');
var servicename = 'game';
var randomuserdata = require('../../../../test/unit/fixtures/randomuserdata.js');

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

            it('getSmallPicture should succeed', function(done) {

                // this.$httpBackend
                //     .when('GET', 'http://api.randomuser.me/?results=30')
                //     .respond(randomuserdata);

                // this.service.getSmallPictures()
                //     .then(function(pictures) {
                //         expect(pictures.length).toBe(2);
                //         done();
                //     }, done);

                this.service.getSmallPictures()
                    .then(function(pictures) {
                        console.log('je suis là p');
                        expect(pictures.length).toBe(15);
                        done();
                    }, done);

                this.$rootScope.$apply();
                //this.$httpBackend.flush();

            });

        });
    });
});
