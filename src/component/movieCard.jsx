//สร้าง render list container ไว้เรียกใช้
//props เป็นส่วนของ key ใน object
// movies.map((movieObject, index) => {return MovieCard};
function MovieCard(movieObject, index) {
  return (
    <div
      key={index}
      className="containerCard"
      style={{
        height: "250px",
        width: "400px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        borderRadius: "10px",
        margin: "30px",
      }}
    >
      <div className="movieImage">
        <img
          style={{
            height: "100px",
            width: "100px",
            borderRadius: "10px",
            margin: "15px 10px",
          }}
          src={movieObject.image}
        />
      </div>
      <div
        className="movieDescription"
        style={{
          height: "210px",
          width: "230px",
          margin: "15px 10px",
          color: "black",
        }}
      >
        <div className="title">Title: {movieObject.title}</div>
        <div className="year">Year: {movieObject.year}</div>
        <div className="runtime">Runtime: {movieObject.runtime}</div>
        <div
          className="genres"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
          }}
        >
          Genres:{" "}
          {movieObject.genres.map((value, index) => {
            return (
              <div
                key={index}
                style={{
                  height: "27px",
                  width: "68px",
                  backgroundColor: "#EAAC99",
                  fontSize: "0.8em",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                }}
              >
                {value}
              </div>
            );
          })}
        </div>
        <div className="rating">IMDB Rating: {movieObject.imdbRating}</div>
        <div className="vote">IMDB Votes: {movieObject.imdbVotes}</div>
      </div>
    </div>
  );
}
export default MovieCard;
