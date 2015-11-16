import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    Ember.$('.swipebox').swipebox();
  },

  actions: {
    download(link) {
      window.location.href = link;
    }
  }
});
