import {
  ADD_PRODUCT,
  FETCHING_PRODUCTS,
  SHOW_PRODUCTS,
  GET_PRODUCT_DETAIL,
  UPDATE_PRODUCT
} from 'constants/actionTypes';

const initialState = {
  isFetchingProducts: false,
  productList: [],
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return Object.assign({}, state, {
        productList: action.payload,
      });
    case FETCHING_PRODUCTS:
      return Object.assign({}, state, {
        isFetchingProducts: true,
      });
    case SHOW_PRODUCTS:
      return Object.assign({}, state, {
        isFetchingProducts: false,
        productList: action.payload,
      });
    case GET_PRODUCT_DETAIL:
      return Object.assign({}, state, {
        productDetail: action.payload
      });
    case UPDATE_PRODUCT:
      return Object.assign({}, state, {
        productDetail: action.payload
      });
    default:
      return state;
  }
};

export default product;
