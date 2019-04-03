import { createAction } from 'redux-actions';

import { mockAuthData } from '../../constants';

export const authUser = createAction('AUTH_USER', () => ({ isAuthorized: true, error: null }));
export const updateAuthError = createAction('UPDATE_AUTH_ERROR', () => ({
  isAuthorized: false,
  error: mockAuthData.error,
}));
export const logoutUser = createAction('LOGOUT_USER', () => {
  localStorage.removeItem('isAuthorized');
  console.log('isAuthorized');
  return { isAuthorized: false, error: null };
});

export const authUserCheck = (login, password) => dispatch => {
  if (
    mockAuthData.login.toLowerCase() === login.toLowerCase() &&
    mockAuthData.password === password
  ) {
    localStorage.setItem('isAuthorized', true);
    dispatch(authUser());
  } else {
    dispatch(updateAuthError());
  }
};
