import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import products from 'reducers/products';

const rootReducer = combineReducers({
  products,
  form: formReducer,
});

export default rootReducer;
