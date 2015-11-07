import Ember from 'ember';

export default Ember.Controller.extend({
  isMenuOpen: false,

  init() {
    $('body').on('click', (e) => {
      e.preventDefault();

      if (this.isMenuOpen && $(e.target).parents('.st-menu').length === 0) {
        $('#js-container').removeClass('st-menu-open');
        this.isMenuOpen = false;
      }
    });
  },

  actions: {
    onMenuOpen(e) {
      $('#js-container').addClass('st-effect-3 st-menu-open');
      this.isMenuOpen = true;
    }
  }
});
