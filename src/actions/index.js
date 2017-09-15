import { ADD_PRODUCT } from '../constants/actions';

export const addProduct = data => {
  alert(JSON.stringify(data, null, 4));
  const action = {
    type: ADD_PRODUCT,
    payload: data
  };
  return action;
};
