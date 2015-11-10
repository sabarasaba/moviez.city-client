import Ember from 'ember';
import MoviesList from './MoviesList';

export default MoviesList.extend({
  model(params) {
    this.apiParams.category = params.name;

    return this.infinityModel('movie', this.apiParams);
  }
});