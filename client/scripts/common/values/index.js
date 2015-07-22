'use strict';

module.exports = function(app) {
    // inject:start
    require('./userData')(app);
    // inject:end
};