import React from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../../store/actions/auth';

const Logout = ({ children, logoutUser }) => {
  const handlerClick = () => {
    logoutUser();
  };

  return (
    <li className="nav-item">
      <span
        onClick={handlerClick}
        style={{ color: '#007bff', cursor: 'pointer' }}
        className="nav-link"
      >
        {children}
      </span>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => {
    dispatch(logoutUser());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Logout);
