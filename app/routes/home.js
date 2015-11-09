import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'movies',

  model() {
    return this.store.query('movie', {'limit': '20'});
  }
});
