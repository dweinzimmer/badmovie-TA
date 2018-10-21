import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [],
      favorites: [],
      showFaves: false,
    };
    
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
  }

  getMovies(genre) {
    let options = {
      method: 'get',
      url: '/movies/search',
      params: {genre}
    }
    axios(options)
    .then(
      (searchResults) => {
        let movieList = searchResults.data.results;
        this.setState({
          movies: movieList
        })
      }
    )
  }

  getFavorites() {
    axios.get('/movies/favorites')
    .then(({data}) => {
      this.setState({
        favorites: data
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }

  saveMovie(movie) {
    axios.post('/movies/save', movie)
    .then((response) => console.log(response))
    .then(this.getFavorites())
    .catch((err) => console.error(err))
  }

  deleteMovie(movie) {
    axios.delete('/movies/delete', {data: {movie}})
    // a note on delete request's data: https://github.com/axios/axios/issues/897#issuecomment-343715381
    .then((response) => console.log(response))
    .then(this.getFavorites())
    .catch((err) => console.error(err))
  }

  swapFavorites() {
  // don't touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  componentDidMount() {
    this.getFavorites();
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        
        <div className="main">
          <Search getMovies={this.getMovies} swapFavorites={this.swapFavorites} showFaves={this.state.showFaves}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves} saveMovie={this.saveMovie} deleteMovie={this.deleteMovie}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));