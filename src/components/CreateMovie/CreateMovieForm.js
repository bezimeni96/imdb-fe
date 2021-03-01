import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField, Field } from "formik";
import * as Yup from "yup";

import { connect } from "react-redux";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}> {label} </label>
      <br />
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error"> {meta.error} </div>
      ) : null}
    </>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <br />
      <textarea className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <br />
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const GENRE_TYPES = [
  "Action",
  "Drama",
  "Horor",
  "Romance",
  "Comedy",
  "Thriller",
  "Crime",
  "Western",
];

const CreateMoviForm = (props) => (
  <Formik
    initialValues={{
      title: "",
      description: "",
      cover_image: "",
      genre: "",
    }}
    validationSchema={Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string(),
      cover_image: Yup.string().required("Cover image url is required"),
      genre: Yup.string()
        .oneOf(GENRE_TYPES, "Invalid genre type")
        .required("Genre is required"),
    })}
    onSubmit={(values) => {
      props.createMovie({
        title: values.title,
        description: values.description,
        cover_image: values.cover_image,
        genre: values.genre,
      });
    }}
  >
    <Form>
      <MyTextInput
        label="Title"
        name="title"
        type="text"
        placeholder="Enter movie title"
      />
      {props.error !== null &&
        props.error.hasOwnProperty("title") &&
        "Error: " + props.error.title[0]}
      <br /> <br />
      <MyTextArea
        label="Description"
        name="description"
        rows="6"
        placeholder="Enter movie description"
      />
      <br /> <br />
      <MyTextInput
        label="Cover image url"
        name="cover_image"
        type="url"
        placeholder="Enter movie cover image url"
      />
      {props.error !== null &&
        props.error.hasOwnProperty("cover_image") &&
        "Error: " + props.error.cover_image[0]}
      <br /> <br />
      <MySelect label="Genre" name="genre">
        <option value="">Select a genre type</option>
        {GENRE_TYPES.map((genre, index) => {
          return (
            <option key={index} value={genre}>
              {genre}
            </option>
          );
        })}
      </MySelect>
      {props.error !== null &&
        props.error.hasOwnProperty("genre") &&
        "Error: " + props.error.genre[0]}
      <br /> <br />
      <button type="submit">Create</button>
    </Form>
  </Formik>
);

const mapStateToProps = ({ error }) => ({
  error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    createMovie: (payload) =>
      dispatch({ type: "CREATE_MOVIE_REQUEST", payload: payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMoviForm);
