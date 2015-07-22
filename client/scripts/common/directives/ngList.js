'use strict';
/*eslint consistent-this:[2,  "ngListCtrl"] */
var directivename = 'ngList';
var angular = require('angular');
var _ = require('lodash');
module.exports = function(app) {

    // controller
    var controllerDeps = ['$scope'];
    var controller = function($scope) {
        var ngListCtrl = this;
        ngListCtrl.directivename = directivename;

        $scope.$watch(function() {
            return ngListCtrl.pictures;
        }, function(newValue, oldValue) {
            ngListCtrl.myarray = _.chunk(ngListCtrl.pictures, ngListCtrl.col);
        });

        ngListCtrl.myarray = _.chunk(ngListCtrl.pictures, ngListCtrl.col);
    };
    controller.$inject = controllerDeps;

    /*eslint-disable consistent-this */

    // directive
    var directiveDeps = ['$window'];
    var directive = function($window) {
        return {
            restrict: 'AE',
            scope: {
                title: '@',
                pictures: '=',
                col: '@'
            },
            controller: controller,
            controllerAs: 'ngListCtrl',
            bindToController: true,
            require: ['ngList'],
            template: require('./ngList.html'),
            compile: function(tElement, tAttrs) {
                return {
                    pre: function(scope, element, attrs, ctrls) {},
                    post: function(scope, element, attrs, ctrls) {
                        var ngListCtrl = ctrls[0];

                        // scope.$watch(ngListCtrl.pictures, function(newValue, oldValue) {
                        //     // console.log(ngListCtrl.pictures);
                        //     // ngListCtrl.pictures = newValue;
                        //     // console.log(oldValue);
                        //     // console.log(newValue);
                        // });

                        var wins = angular.element($window);
                        ngListCtrl.windowWidth = $window.innerWidth / ngListCtrl.col;

                        wins.bind('resize', function(e) {
                            ngListCtrl.windowWidth = $window.innerWidth / ngListCtrl.col;
                            scope.$digest();
                            //console.log(" Window resized! ");
                            // Your relevant code here...

                        });
                    }
                };
            }
        };
    };
    directive.$inject = directiveDeps;

    app.directive(directivename, directive);
};
