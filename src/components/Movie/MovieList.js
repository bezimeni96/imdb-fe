import React, { useEffect } from "react";
import { connect } from "react-redux";

import MovieCard from "./MovieCard";

const MovieList = ({ ...props }) => {
  useEffect(() => {
    props.fetchMovies();
  }, []);
  return (
    <>
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
      <div>
        {props.movie !== null && props.movie.previous !== null && (
          <button
            type="button"
            onClick={() => props.fetchMovies({ link: props.movie.previous })}
          >
            Previous
          </button>
        )}
        {props.movie !== null && props.movie.next !== null && (
          <button
            type="button"
            onClick={() => props.fetchMovies({ link: props.movie.next })}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

const mapStateToProps = ({ movie }) => ({
  movie,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (payload) =>
      dispatch({ type: "FETCH_MOVIES_REQUEST", payload: payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
