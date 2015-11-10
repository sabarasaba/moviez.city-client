import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lists');
  this.route('top50');

  this.route('movies', {path: '/'}, function() {
    this.route('show', {path: '/movie/:id'});
  });
});

export default Router;
