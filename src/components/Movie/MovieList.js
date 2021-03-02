import React, { useEffect } from "react";
import { connect } from "react-redux";

import MovieCard from "./MovieCard";
import SearchField from "./SearchField";

const MovieList = (props) => {
  useEffect(() => {
    props.fetchMovies();
  }, []);
  return (
    <>
      <SearchField fetchMovies={props.fetchMovies} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {props.movie !== null &&
          props.movie.list &&
          props.movie.list.length > 0 &&
          props.movie.list.map((movie) => (
            <MovieCard key={movie.pk} movie={movie} />
          ))}
        {props.movie !== null && props.movie.list.length === 0 && (
          <p>There is no movies</p>
        )}
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
