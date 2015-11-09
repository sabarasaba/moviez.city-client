import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'movies',

  model() {
    return {
      title: 'Home'
    };
  }
});
