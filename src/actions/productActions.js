import {
  FETCHING_PRODUCTS,
  SHOW_PRODUCTS,
  ADD_PRODUCT,
  GET_PRODUCT_DETAIL,
  UPDATE_PRODUCT
} from 'constants/actionTypes';

export const fetchingProducts = () => {
  return {
    type: FETCHING_PRODUCTS
  };
};

export const fetchProductsSuccess = data => {
  return {
    type: SHOW_PRODUCTS,
    payload: data
  };
};

export const addProductSuccess = data => {
  return {
    type: ADD_PRODUCT,
    payload: data
  };
};

export const getProductDetail = data => {
  return {
    type: GET_PRODUCT_DETAIL,
    payload: data
  };
};

export const updateProductSuccess = data => {
  return {
    type: UPDATE_PRODUCT,
    payload: data
  };
};
