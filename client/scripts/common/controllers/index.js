'use strict';

module.exports = function(app) {
    // inject:start
    require('./current')(app);
    require('./game')(app);
    require('./games')(app);
    require('./instagram')(app);
    require('./login')(app);
    require('./pictures')(app);
    require('./result')(app);
    // inject:end
};