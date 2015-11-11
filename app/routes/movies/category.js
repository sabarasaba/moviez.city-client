import MoviesList from './MoviesList';

export default MoviesList.extend({
  model(params) {
    const payload = Object.assign({}, this.apiParams, {
      category: params.name
    });

    return this.infinityModel('movie', payload);
  }
});