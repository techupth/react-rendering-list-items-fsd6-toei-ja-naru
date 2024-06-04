/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import movies from "../data/movies";

function MovieCard() {
  return (
    <div className="card" css={css``}>
      {movies.map((movie, index) => {
        return (
          <div
            className="card"
            key={index}
            css={css`
              width: 400px;
              height: 250px;
              display: flex;
              gap: 16px;
              margin: 64px;
              padding: 16px;
              border-radius: 10px;
              box-shadow: 2px 2px 8px 7px rgba(253, 247, 247, 0.1);
            `}
          >
            <div className="left-box">
              <img
                src={`${movie.image}`}
                alt="movie picture"
                css={css`
                  width: 102px;
                  height: 100px;
                  object-fit: cover;
                  border-radius: 10px;
                `}
              />
            </div>
            <div
              className="right-box"
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              `}
            >
              <p> Title: {movie.title} </p>
              <p> Year: {movie.year} </p>
              <p> Runtime: {movie.runtime} </p>
              <div
                css={css`
                  display: flex;
                  gap: 5px;
                `}
              >
                Genres:
                {movie.genres.map((item) => {
                  return (
                    <div
                      css={css`
                        background-color: #eaac99;
                        border-radius: 10px;
                        font-size: 16px;
                        padding: 1px;
                      `}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
              <p>IMDB Ratings: {movie.imdbRating} </p>
              <p> IMDB Votes: {movie.imdbVotes} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieCard;
