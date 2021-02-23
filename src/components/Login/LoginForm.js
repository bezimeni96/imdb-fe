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

const LoginForm = (props) => (
  <Formik
    initialValues={{
      email: "",
      password: "",
    }}
    validationSchema={Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    })}
    onSubmit={(values) => {
      props.fetching({ email: values.email, password: values.password });
    }}
  >
    <Form>
      <MyTextInput
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
      />
      <br />
      <MyTextInput
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      {props.user.error.hasOwnProperty("password")
        ? "Error: " + props.user.error.password[0]
        : null}
      {props.user.error.detail ? <p>Error: {props.user.error.detail}</p> : null}
      <br /> <br />
      <button type="submit">Login</button>
    </Form>
  </Formik>
);

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetching: (payload) =>
      dispatch({ type: "FETCH_USER_REQUEST", payload: payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
