import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['categories-list'],

  elements: null,

  categories: function() {
    return _.map(this.get('elements'), (e) => {
      e.color = randomColor({
        luminosity: 'light'
      });

      return e;
    });
  }.property('elements')
});
