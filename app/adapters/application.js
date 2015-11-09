import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://moviez.city',
  namespace: 'api'
});
