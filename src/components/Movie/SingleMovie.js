import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const SingleMovie = (props) => {
  useEffect(() => {
    props.fetchMovie(props.pk)
  }, []);
  return (
    <div>
      <Link
        to={{
          pathname: `/movies/`,
        }}
      >
        Go to movies
      </Link>
      {props.movie !== null && props.movie.single_movie && <div>
        <h1>{props.movie.single_movie.title}</h1>
        <p>Genre: {props.movie.single_movie.genre}</p>
        <p>Description: <br />
          {props.movie.single_movie.description}
        </p>
        <img src={props.movie.single_movie.cover_image} style={{ width: '100%' }}/>
      </div>}
    </div>
  );
};

const mapStateToProps = ({ movie }) => ({
  movie,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (payload) =>
      dispatch({ type: "FETCH_SINGLE_MOVIE_REQUEST", payload: payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);
