import React from "react";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={{
        pathname: `/movies/${movie.pk}`,
      }}
      style={{
        width: "19%",
        textTransform: "none",
        backgroundColor: "#eee",
        marginBottom: "20px",
        textDecoration: "none",
        color: "#000",
      }}
    >
      <img
        className="card-img-top"
        src={movie.cover_image}
        alt=""
        style={{ width: "100%" }}
      />
      <div style={{ marginLeft: "10px" }}>
        <h4>{movie.title}</h4>
        <TextTruncate
          line={3}
          element="p"
          truncateText="…"
          text={movie.description}
        />
      </div>
    </Link>
  );
};

export default MovieCard;
