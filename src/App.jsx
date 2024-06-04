import "./App.css";
import MovieCard from "./component/movieCard";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        {/*Reder movie list by use function */}
        {movies.map(MovieCard)}
      </section>
    </div>
  );
}

export default App;
