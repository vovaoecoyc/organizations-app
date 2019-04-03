import React from 'react';

import NavList from '../NavList';

const Toolbar = ({ isAuthorized }) => {
  return <NavList isAuthorized={isAuthorized} />;
};

export default Toolbar;
