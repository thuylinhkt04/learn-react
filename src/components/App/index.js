/* eslint-disable import/no-named-as-default */
import PropTypes from "prop-types";
import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import Lesson1 from '../Lesson1';
import Lesson2 from '../Lesson2';
import UserDetail from '../Lesson2/UserDetail';
import NotFoundPage from "../NotFoundPage";
import Homepage from "../Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div className="container">
        <div>
          <NavLink exact to="/lesson1" activeStyle={activeStyle}>Lesson 1</NavLink>
          {' | '}
          <NavLink to="/lesson2" activeStyle={activeStyle}>Lesson 2</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/lesson1" component={Lesson1} />
          <Route path="/lesson2" component={Lesson2} />
          <Route path="/users/:id" component={UserDetail} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
