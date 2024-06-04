import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      <section className="movie-list-section">
        <h1>Movie List Section</h1>
        {/* Render Movie Lists Here */}
        <MovieList />
      </section>
    </div>
  );
}

function MovieList() {
  return movies.map((movie, index) => {
    return (
      <div className="movie-card" key={index}>
        <div>
          <img src={movie.image} width={100} height={102} />
        </div>
        <div className="movie-info">
          <p>Title: {movie.title}</p>
          <p>Year: {movie.year}</p>
          <p>Runtime: {movie.runtime}</p>
          <p class="genres">
            Genres:
            {movie.genres.map((genre, index) => {
              return <div key={index}>{genre}</div>;
            })}
          </p>
          <p>IMDB Ratings: {movie.imdbRating}</p>
          <p>IMDB Votes: {movie.imdbVotes}</p>
        </div>
      </div>
    );
  });
}

export default App;
