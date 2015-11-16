import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    download(link) {
      window.location.href = link;
    }
  }
});
