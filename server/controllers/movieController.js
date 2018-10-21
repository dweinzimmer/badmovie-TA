const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {    
    // get the search genre
    let genreIds = [12, 14];
    // TO DO: let genreIds = req.body.genreIds .......

    let genresString = genreIds.join(',');
    // sort by horrible votes -- can also sort by popularity.asc
    let queryString = `sort_by=vote_average.asc&with_genres=${genresString}`

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

  },

  deleteMovie: (req, res) => {

  }
}