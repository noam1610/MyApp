'use strict';

module.exports = function(app) {
    // inject:start
    require('./dataService')(app);
    require('./instagram')(app);
    // inject:end
};