const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {    
    // get the search genre
    let genreIds = [12, 14];
    // TO DO: let genreIds = req.body.genreIds .......

    // use this endpoint to search for movies by genres https://api.themoviedb.org/3/discover/movie
    
    let genresString = genreIds.join(',');
    let queryString = `sort_by=popularity.asc&with_genres=${genresString}`

    apiHelpers.getRequest('discover/movie', queryString)
    .then((data) => res.send(data));

    // and sort them by horrible votes using the search parameters in the API
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