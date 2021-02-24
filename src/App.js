import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { connect } from "react-redux";

import LoginPage from "./components/Login/LoginPage";
import RegisterPage from "./components/Register/RegisterPage";

// const loggedIn = props.user;

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            Hello world
            {props.user !== null && props.user.username && (
              <h2>Welcome {props.user.username}!</h2>
            )}
          </div>
        </Route>
        <Route exact path="/login">
          {props.loading === "login success" ? (
            <Redirect to="/" />
          ) : (
            <LoginPage />
          )}
        </Route>
        <Route exact path="/register">
          {props.loading === "register success" ? (
            <Redirect to="/login" />
          ) : (
            <RegisterPage />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = ({ loading, user }) => ({
  loading,
  user,
});

export default connect(mapStateToProps, null)(App);
