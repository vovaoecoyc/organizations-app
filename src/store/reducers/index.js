import { combineReducers } from 'redux';

import auth from './auth';
import departments from './departments';

const rootReducer = combineReducers({ auth, departments });

export default rootReducer;
