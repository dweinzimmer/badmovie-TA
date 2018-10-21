const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {    
    console.log('req.query for search method is ', req.query);
    let genreId = req.query.genre;

    // sort by horrible votes -- can also sort by popularity.asc
    let queryString = `sort_by=popularity.asc&with_genres=${genreId}`

    // endpoint for searching movies by genres https://api.themoviedb.org/3/discover/movie
    apiHelpers.getRequest('discover/movie', queryString)
    .then((data) => res.send(data));
  },

  getGenres: (req, res) => {
    // make an axios request to get the list of official genres, with this endpoint https://api.themoviedb.org/3/genre/movie/list

    apiHelpers.getRequest('genre/movie/list')
    .then((data) => res.send(data));
    
    // send back
  },

  saveMovie: (req, res) => {
    // req.body holds an object of the movie. Push to database.
    res.send('hello world');
  },

  deleteMovie: (req, res) => {

  }
}