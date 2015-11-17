/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: ['bower_components/normalize-scss']
    }
  });

  app.import('bower_components/lodash/lodash.min.js', {
    'lodash': ['default']
  });
  app.import('bower_components/moment/min/moment.min.js');
  app.import('bower_components/randomcolor/randomColor.js', {
    exports: { 'randomcolor': ['default'] }
  });

  // Import swipebox dependencies
  app.import('bower_components/swipebox/src/js/jquery.swipebox.min.js');
  app.import('bower_components/swipebox/src/css/swipebox.min.css');
  app.import('bower_components/swipebox/src/img/icons.png', {destDir: 'img/'});
  app.import('bower_components/swipebox/src/img/icons.svg', {destDir: 'img/'});
  app.import('bower_components/swipebox/src/img/loader.gif', {destDir: 'img/'});

  return app.toTree();
};
