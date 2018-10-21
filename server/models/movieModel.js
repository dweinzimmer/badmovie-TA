//SELECT one db to work with
//For SQL
// const sqlDb = require('../../db/sql');
//For Mongo
const db = require('../../db/mongodb')

var movieSchema = new mongoose.Schema({
  title: String,
  id: {
    type: Number,
    unique: true
  },
  vote_average: Number,
  vote_count: Number,
  poster_path: String,
  release_date: String,
  popularity: Number
});

const Movie = mongoose.model('Movie', movieSchema);


let addToDB = (movieFromClient) => {
  let newMovie = new Movie(movieFromClient);
  newMovie.save((err) => {
    console.error(err);
  });

  // ANOTHER WAY...
  // Movie.create(movieFromClient, (err, movie) => {
  //   if (err) {
  //     console.error(err)
  //   }
  // })
}

let deleteFromDB = (movieFromClient) => {
  Movie.findOneAndDelete({id: movieFromClient.id}, (err) => {
    if (err) {
      console.error(err);
    }
  })
}

let getFromDB = () => {
  Movie.find({}, (err, docs) => {
    if (err) {
      console.error(err);
    } else {
      return docs;
    }
  })
}


module.exports = {
  addToDB,
  deleteFromDB,
  getFromDB
}