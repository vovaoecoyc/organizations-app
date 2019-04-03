import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Departments from './containers/Departments';
import Employees from './containers/Employees';
import Toolbar from './components/Toolbar';
import FormAuth from './containers/FormAuth';
import PrivateRoute from './components/hoc/PrivateRoute';
import { authUser } from './store/actions/auth';

class App extends Component {
  renderRouteLogin = dataRoute => {
    return <FormAuth {...dataRoute} isAuthorized={this.props.isAuthorized} />;
  };

  componentDidMount() {
    localStorage.getItem('isAuthorized') && this.props.authUser();
  }

  render() {
    const { isAuthorized } = this.props;
    return (
      <section>
        <Toolbar isAuthorized={isAuthorized} />
        <Switch>
          <PrivateRoute path="/departments" isAuthorized={isAuthorized} component={Departments} />
          <PrivateRoute path="/employees" isAuthorized={isAuthorized} component={Employees} />
          <PrivateRoute exact={true} path="/" isAuthorized={isAuthorized} component={Departments} />
          <Route path="/auth" render={this.renderRouteLogin} />
          <Redirect to="/" />
        </Switch>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized,
});

const mapDispatchToProps = dispatch => ({
  authUser: () => {
    dispatch(authUser());
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
