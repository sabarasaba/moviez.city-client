import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  poster_path: DS.attr('string'),
  backdrop_path: DS.attr('string'),
  original_language: DS.attr('string'),
  release_date: DS.attr('date'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  overview: DS.attr('string'),
  plot: DS.attr('string'),
  rated: DS.attr('string'),
  director: DS.attr('string'),
  runtime: DS.attr('string'),
  metacritic: DS.attr('number'),
  trailer: DS.attr('string'),
  imdb: DS.attr('raw'),
  awards: DS.attr('raw'),
  download: DS.attr('raw'),
  Categories: DS.attr('raw')
});
