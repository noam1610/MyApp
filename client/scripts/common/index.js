'use strict';
require('angular-ui-router');
require('angular-sanitize');
require('angular-animate');
require('ionic');
require('ionic-angular');
require('ng-cordova');

var modulename = 'common';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var angular = require('angular');
    var app = angular.module(fullname, ['ui.router', 'ionic', 'ngCordova']);
    // inject:folders start
    require('./controllers')(app);
    require('./directives')(app);
    require('./services')(app);
    require('./values')(app);
    // inject:folders end

    app.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider',
        function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
            $ionicConfigProvider.views.transition('ios');
            $ionicConfigProvider.tabs.position('bottom');
            $stateProvider
                .state('tab', {
                    url: '/tab',
                    abstract: true,
                    template: require('./views/tabs.html')
                })
                .state('tab.games', {
                    url: '/games',
                    views: {
                        'tab-games': {
                            template: require('./views/games.html'),
                            controller: fullname + '.gamesCtrl as vm'
                        }
                    }
                })
                .state('tab.game', {
                    url: '/game/:id',
                    views: {
                        'tab-games': {
                            template: require('./views/descriptif.html'),
                            controller: fullname + '.gameCtrl as vm'
                        }
                    }
                })
                .state('tab.pictures', {
                    url: '/pictures',
                    views: {
                        'tab-pictures': {
                            template: require('./views/Pictures.html'),
                            controller: fullname + '.pictures as vm'
                        }
                    }
                })
                .state('tab.encours', {
                    url: '/encours',
                    views: {
                        'tab-encours': {
                            template: require('./views/encours.html'),
                            controller: fullname + '.encoursCtrl as vm'
                        }
                    }
                })
                .state('tab.result', {
                    url: '/result/:id',
                    views: {
                        'tab-encours': {
                            template: require('./views/result.html'),
                            controller: fullname + '.resultCtrl as vm'
                        }
                    }
                })
                .state('tab.success', {
                    url: '/success/:id',
                    views: {
                        'tab-encours': {
                            template: require('./views/success.html'),
                            controller: fullname + '.resultCtrl as vm'
                        }
                    }
                })
                .state('tab.instagram', {
                    url: '/instagram',
                    views: {
                        'tab-instagram': {
                            template: require('./views/instagram.html'),
                            controller: fullname + '.instagram as vm'

                        }
                    }
                })
                .state('login', {
                    url: '/login',
                    template: require('./views/login.html'),
                    controller: fullname + '.loginCtrl as vm'
                });
            $urlRouterProvider.otherwise('login');
        }
    ]);

    return app;
};
