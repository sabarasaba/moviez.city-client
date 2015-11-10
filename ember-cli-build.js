/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: ['bower_components/normalize-scss']
    }
  });

  app.import('bower_components/lodash/lodash.min.js');

  return app.toTree();
};
