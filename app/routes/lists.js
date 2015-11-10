import Ember from 'ember';

export default Ember.Route.extend({
  title: 'Lists',

  model() {
    return this.store.findAll('list');;
  }
});
