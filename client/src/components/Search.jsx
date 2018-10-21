import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    };
    this.getGenres = this.getGenres.bind(this);
  }

  getGenres() {
    //make axios request to get the list of genres from your endpoint GET GENRES
    axios.get('/movies/genres')
    .then(({data}) => this.setState({genres: data.genres}));
  }

  componentDidMount() {
    this.getGenres();
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select>
          <option value="">Choose a genre</option>
          {this.state.genres.map((genre) => {
            return (
              <option value={genre.id}>{genre.name}</option>
            )
          })}
        </select>
        <br/><br/>

        <button>Search</button>
      </div>
    );
  }
}

export default Search;