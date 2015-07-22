'use strict';

module.exports = function(app) {
    // inject:start
    require('./encoursCtrl')(app);
    require('./gameCtrl')(app);
    require('./gamesCtrl')(app);
    require('./instagram')(app);
    require('./loginCtrl')(app);
    require('./pictures')(app);
    require('./resultCtrl')(app);
    // inject:end
};