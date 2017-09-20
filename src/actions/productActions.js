import axios from 'axios';
import {
  ADD_PRODUCT,
  SHOW_PRODUCTS
} from 'constants/actions';
import API_URL_BASE from 'APIClient/HTTPClient';

export const addProduct = data => {
  alert(JSON.stringify(data, null, 4));
  const action = {
    type: ADD_PRODUCT,
    payload: data
  };
  return action;
};

export const fetchProducts = () => {
  const request = axios({
    method: 'get',
    url: `${API_URL_BASE}/products`
  });
  return request;
};

export const fetchProductsSuccess = data => {
  const action = {
    type: SHOW_PRODUCTS,
    payload: data,
  };
  return action;
};

export const fetchProductsFailure = error => {
  console.log(`${error}`);
  return { type: '' };
};

export const showProducts = () => {
  return dispatch => {
    return fetchProducts()
    .then(response => {
      if (response.status === 200) {
        dispatch(fetchProductsSuccess(response.data));
      } else {
        throw new Error('Something went wrong...');
      }
    })
    .catch(error => dispatch(fetchProductsFailure(error)));
  };
};
