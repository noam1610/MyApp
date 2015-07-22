'use strict';

module.exports = function(app) {
    // inject:start
    require('./game')(app);
    require('./instagram')(app);
    // inject:end
};