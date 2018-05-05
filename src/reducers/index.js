import { combineReducers } from 'redux';
import NavReducer from './navigator.js'

// Root Reducer
const rootReducer = combineReducers({
    nav: NavReducer,
  });

  export default rootReducer;