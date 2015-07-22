'use strict';
var controllername = 'loginCtrl';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.instagram', app.name + '.userData', '$state', '$ionicLoading', '$ionicPopup', '$ionicPlatform'];

    function controller(instagram, userData, $state, $ionicPopup, $ionicPlatform) {
        var vm = this;
        vm.controllername = fullname;

        vm.login = function() {
            if (window.Connection) {

                if (navigator.connection.type === Connection.NONE) {

                    $ionicPopup.confirm({
                            title: 'Internet Disconnected',
                            content: 'The internet is disconnected on your device.'
                        })
                        .then(function(result) {
                            if (!result) {
                                ionic.Platform.exitApp();
                            }
                        });
                } else {
                    instagram.getToken().then(function(token) {
                
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
