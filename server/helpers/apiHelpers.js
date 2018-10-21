const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org

const getRequest = (endpoint, queryString) => {
  if (!queryString) {queryString = '';}
  console.log('performing axios request to ' + 'https://api.themoviedb.org/3/' + endpoint + '&api_key=API_KEY_HERE')
  return axios.get(`https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&${queryString}`)

  .then(({data}) => {
    // console.log('results of Axios GET request:', data)
    return data;
  })

}

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover

// Don't forget to export your functions and require them within your server file

exports.getRequest = getRequest;