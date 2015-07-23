'use strict';
var controllername = 'login';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.instagram', app.name + '.userData', '$state', '$ionicPopup', '$ionicPlatform', '$window', '$cordovaNetwork'];

    function controller(instagram, userData, $state, $ionicPopup, $ionicPlatform, $window, $cordovaNetwork) {
        var vm = this;
        vm.controllername = fullname;
        console.log(window);
        console.log($window);
        vm.login = function() {
            // var Connection = $cordovaNetwork.getNetwork();
            console.log(window.Connection);
            if (window.Connection) {
                if (navigator.connection.type === window.Connection.NONE) {
                    $ionicPopup.confirm({
                            title: 'Internet Disconnected',
                            content: 'The internet is disconnected on your device.'
                        })
                        .then(function(result) {
                            if (!result) {
                                window.ionic.Platform.exitApp();
                            }
                        });
                } else {
                    instagram.getToken().then(function(token) {
                        alert('appel instagram');
                        userData.access_token = token;
                        $state.go('tab.pictures');
                    });
                }
            } else {
                instagram.getToken().then(function(token) {
                    alert('appel instagram');
                    userData.access_token = token;
                    $state.go('tab.pictures');
                });
            }

        };
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
