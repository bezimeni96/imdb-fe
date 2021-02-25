import React, { useEffect } from "react";
import { connect } from "react-redux";

import MovieCard from "./MovieCard";

const MovieList = ({ ...props }) => {
  useEffect(() => {
    props.fetchMovies();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {props.movie !== null &&
        props.movie.list &&
        props.movie.list.map((movie) => (
          <MovieCard key={movie.pk} movie={movie} />
        ))}
    </div>
  );
};

const mapStateToProps = ({ movie }) => ({
  movie,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch({ type: "FETCH_MOVIES_REQUEST" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
