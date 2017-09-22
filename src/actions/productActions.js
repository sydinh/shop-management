import axios from 'axios';
import API_URL_BASE from 'APIClient/HTTPClient';
import {
  ADD_PRODUCT,
  FETCHING_PRODUCTS,
  SHOW_PRODUCTS
} from 'constants/actions';
import { showNotificationFromToaster } from 'helpers/Toaster';
import {
  TOAST_SUCCESSFUL as successful,
  TOAST_FAILED as failed
} from 'constants/toasters';
import { firstToUpperCase } from 'helpers/FormatString';

export const addProductSuccess = data => {
  const action = {
    type: ADD_PRODUCT,
    payload: data
  };
  return action;
};

export const addProductFailure = error => {
  console.log(`${error}`);
  return { type: 'YOUR_KEY' };
};

export const addProduct = data => {
  return dispatch => {
    const { productName, productPrice, productDescription } = data;
    const productNameWithUpercaseFirstLetter = firstToUpperCase(productName);
    const productDescriptionWithUpercaseFirstLetter = firstToUpperCase(productDescription);
    const productPriceParsedToInt = parseInt(productPrice, 10);
    axios({
      method: 'post',
      url: `${API_URL_BASE}/products`,
      data: {
        name: productNameWithUpercaseFirstLetter,
        price: productPriceParsedToInt,
        description: productDescriptionWithUpercaseFirstLetter,
      },
    })
    .then(response => {
      dispatch(addProductSuccess(response.data));
      showNotificationFromToaster(`${productName} added successful`, successful);
    })
    .catch(errors => {
      dispatch(addProductFailure(errors.response));
      showNotificationFromToaster('Add failed', failed);
    });
  };
};

export const fetchProducts = () => {
  const request = axios({
    method: 'get',
    url: `${API_URL_BASE}/products`
  });
  return request;
};

export const fetchingProducts = () => {
  return {
    type: FETCHING_PRODUCTS,
  };
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
  return { type: 'YOUR_KEY' };
};

export const showProducts = () => {
  return dispatch => {
    dispatch(fetchingProducts());
    return fetchProducts()
    .then(response => dispatch(fetchProductsSuccess(response.data)))
    .catch(error => dispatch(fetchProductsFailure(error)));
  };
};
