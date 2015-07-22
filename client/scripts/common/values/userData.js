'use strict';
var valuename = 'userData';

module.exports = function(app) {
    app.value(app.name + '.' + valuename, {
        fullname: 'noam',
        username: 'benlolo',
        profile_picture: '21 ans',
        access_token: '123'
    });
};
