import axios from 'axios';
import {
  ADD_PRODUCT,
  SHOW_PRODUCTS
} from 'constants/actions';

const DATA_URL = 'https://59bb9db81707760011379d8c.mockapi.io';

export const addProduct = data => {
  alert(JSON.stringify(data, null, 4));
  const action = {
    type: ADD_PRODUCT,
    payload: data
  };
  return action;
};

export const fetchProduct = () => {
  const request = axios({
    method: 'get',
    url: `${DATA_URL}/products`
  });
  return request;
};

export const fetchProductSuccess = data => {
  const action = {
    type: SHOW_PRODUCTS,
    payload: data,
  }
  return action;
};

export const fetchProductFailure = error => {
  console.log(`${error}`);
  return { type: '' };
};

export const showProducts = () => {
  return dispatch => {
    return fetchProduct()
    .then(response => {
      if (response.status === 200) {
        dispatch(fetchProductSuccess(response.data));
      } else {
        throw new Error('Something went wrong...');
      }
    })
    .catch(error => dispatch(fetchProductFailure(error)));
  };
};
