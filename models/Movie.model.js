
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
      title: String,
      director: String,
      stars: [String],
      image: String,
      descrption: String,
      showtimes: [String],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;