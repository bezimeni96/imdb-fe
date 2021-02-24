import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

import { connect } from "react-redux";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}> {label} </label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error"> {meta.error} </div>
      ) : null}
    </>
  );
};

const RegisterForm = (props) => (
  <Formik
    initialValues={{
      email: "",
      username: "",
      password: "",
    }}
    validationSchema={Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    })}
    onSubmit={(values) => {
      props.registerUser({
        email: values.email,
        username: values.username,
        password: values.password,
      });
    }}
  >
    <Form>
      <MyTextInput
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
      />
      {props.error !== null &&
        props.error.hasOwnProperty("email") &&
        "Error: " + props.error.email[0]}
      <br />
      <MyTextInput
        label="Username"
        name="username"
        type="text"
        placeholder="Enter your username"
      />
      {props.error !== null &&
        props.error.hasOwnProperty("username") &&
        "Error: " + props.error.username[0]}
      <br />
      <MyTextInput
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      {props.error !== null &&
        props.error.hasOwnProperty("password") &&
        "Error: " + props.error.password[0]}
      <br /> <br />
      <button type="submit">Sign up</button>
    </Form>
  </Formik>
);

const mapStateToProps = ({ error }) => ({
  error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (payload) =>
      dispatch({ type: "REGISTER_USER_REQUEST", payload: payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
