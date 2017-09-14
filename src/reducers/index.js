import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const foo = (state = {}, action) => {
  return state;
};

const bar = (state = {}, action) => {
  return state;
};

const rootReducer = combineReducers({
  form: formReducer,
  foo,
  bar,
});

export default rootReducer;
