import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

import DepartList from './DepartList';
import DepartFull from './DepartFull';

class Departments extends Component {
  renderDepartList = dataRoute => <DepartList {...dataRoute} />;

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact={true} path="/departments" render={this.renderDepartList} />
          <Route path="/departments/:name" component={DepartFull} />
          <Route path="/" component={this.renderDepartList} />
        </Switch>
      </Fragment>
    );
  }
}

// const mapStateToProps = state => ({
//   departments: state.departments.data,
// });

export default Departments;
