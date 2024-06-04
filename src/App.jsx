import "./App.css";
import MovieCard from "./component/MoveiCard";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function App() {
  return (
    <div className="App">
      <header
        css={css`
          margin: 2rem;
          font-size: 40px;
          text-align: center;
        `}
      >
        Movie List Section
      </header>
      <section
        className="movie-list-section"
        css={css`
          display: flex;
          flex-directoin: column;
          justify-content: center;
        `}
      >
        <MovieCard />
      </section>
    </div>
  );
}

export default App;
