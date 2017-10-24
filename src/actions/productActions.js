import {
  FETCHING_PRODUCTS,
  SHOW_PRODUCTS,
  ADD_PRODUCT,
  GET_PRODUCT_DETAIL,
  UPDATE_PRODUCT,
  REMOVE_PRODUCT,
  SHOW_MODAL_DELETE,
  CLOSE_MODAL_DELETE,
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

export const removeProductOnRedux = (id) => {
  return {
    type: REMOVE_PRODUCT,
    id
  };
};

export const showModalDelete = (index, id, name) => {
  return {
    type: SHOW_MODAL_DELETE,
    index,
    id,
    name
  };
};

export const closeModalDelete = () => {
  return {
    type: CLOSE_MODAL_DELETE
  };
};
