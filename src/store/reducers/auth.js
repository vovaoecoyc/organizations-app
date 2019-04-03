import { handleActions } from 'redux-actions';

import * as authActions from '../actions/auth';

const initialState = {
  isAuthorized: false,
  error: null,
};

const reducer = handleActions(
  {
    [authActions.authUser](state, action) {
      return { ...state, ...action.payload };
    },

    [authActions.updateAuthError](state, action) {
      return { ...state, ...action.payload };
    },

    [authActions.logoutUser](state, action) {
      return { ...state, ...action.payload };
    },
  },
  initialState
);

export default reducer;
