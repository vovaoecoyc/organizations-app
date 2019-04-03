import React, { Fragment } from 'react';

import NavItem from './NavItem';
import Logout from '../../containers/Logout';

const NavList = ({ isAuthorized }) => {
  const items = isAuthorized ? (
    <Fragment>
      <NavItem path="/departments">Departments</NavItem>
      <NavItem path="/employees">Employees</NavItem>
      <Logout>Logout</Logout>
    </Fragment>
  ) : (
    <Fragment>
      <NavItem path="/login">Login</NavItem>
    </Fragment>
  );
  return <ul className="nav d-flex justify-content-center">{items}</ul>;
};

export default NavList;
