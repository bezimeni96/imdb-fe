import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import LoginPage from "./components/Login/LoginPage";

// const loggedIn = props.user;

function App(props) {
  const loggedIn = props.user.user.email
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>Hello world
            <div>
              <h2>{props.user.user.email ? 'Welcome ' + props.user.user.email : null}</h2>
            </div>
          </div>
        </Route>
        <Route exact path="/login">
          {loggedIn ? <Redirect to="/" /> : <LoginPage />}
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, null)(App);
