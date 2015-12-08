import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('movie', params.slug);
  },

  activate() {
    Ember.$('html').velocity('scroll', {
      offset: 0,
      duration: 500
    });
  },

  actions: {
    goBack() {
      window.history.back();
    }
  }
});
