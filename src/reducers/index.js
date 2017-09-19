import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import products from 'reducers/product';

const rootReducer = combineReducers({
  products,
  form: formReducer,
});

export default rootReducer;
