import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(movie) {
    // console.log('movie clicked is', movie)

    if (this.props.showFaves === false) {
      this.props.saveMovie(movie)
      
    } else {
      this.props.deleteMovie(movie)
    }
  }

  render() {
    return (
      <ul className="movies">

        {this.props.movies.map((movie) => {
          return (
            <li key={movie.id} value={movie.id} className="movie_item" onClick={() => this.handleClick(movie)}>
              <img src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} />
              
              <div className="movie_description">
                <h2>{movie.title}</h2>
                <section className="movie_details">
                  <div className="movie_year">
                    <span className="title">Year</span>
                    <span>{movie.release_date.slice(0,4)}</span>
                  </div>
                  <div className="movie_rating">
                    <span className="title">Rating</span>
                    <span>{movie.popularity * 10}</span>
                  </div>
                </section>
              </div>
            </li>
          )
        })}
        
      </ul>
    );
  }
}

export default Movies;