import Ember from 'ember';
import InfinityRoute from 'ember-infinity/mixins/route';

export default Ember.Route.extend(InfinityRoute, {
  perPageParam: 'limit',
  pageParam: 'page',
  totalPagesParam: 'meta.total',

  model() {
    return this.infinityModel('movie', { perPage: 10, startingPage: 1 });

    // return this.store.query('movie', {'limit': '2'});
  }
});
