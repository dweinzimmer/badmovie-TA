import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      searchGenre: ''
    };
    this.getGenres = this.getGenres.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  getGenres() {
    //make axios request to get the list of genres from your endpoint GET GENRES
    axios.get('/movies/genres')
    .then(({data}) => this.setState({genres: data.genres}));
  }

  handleGenreChange(e) {
    this.setState({searchGenre: e.target.value})
  }

  submitSearch(e) {
    console.log('submit search triggered, searchGenre is', this.state.searchGenre);
    e.preventDefault();
    this.props.getMovies(this.state.searchGenre);
  }

  componentDidMount() {
    this.getGenres();
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>
        <select onChange={this.handleGenreChange}>
          <option value="none">Choose a genre</option>
          {this.state.genres.map((genre) => {
            return (
              <option value={genre.id}>{genre.name}</option>
            )
          })}
        </select>
        <br/><br/>

        <button onClick={this.submitSearch}>Search</button>
      </div>
    );
  }
}

export default Search;