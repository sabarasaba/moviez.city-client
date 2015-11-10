import Ember from 'ember';
import InfinityRoute from 'ember-infinity/mixins/route';

export default Ember.Route.extend(InfinityRoute, {
  templateName: 'movies/index',

  perPageParam: 'limit',
  pageParam: 'page',
  totalPagesParam: 'meta.total',

  apiParams: {
    perPage: 10,
    startingPage: 1
  },

  model(params) {
    return this.infinityModel('movie', this.apiParams);
  }
});