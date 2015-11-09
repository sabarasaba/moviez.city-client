import Ember from 'ember';

export default Ember.Controller.extend({
  isMenuOpen: false,

  init() {
    Ember.$('body').on('click', (e) => {
      e.preventDefault();

      if (this.isMenuOpen && Ember.$(e.target).parents('.st-menu').length === 0) {
        Ember.$('#js-container').removeClass('st-menu-open');
        this.isMenuOpen = false;
      }
    });
  },

  actions: {
    onMenuOpen() {
      Ember.$('#js-container').addClass('st-effect-3 st-menu-open');
      this.isMenuOpen = true;
    }
  }
});
