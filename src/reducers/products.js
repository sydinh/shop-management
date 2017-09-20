import {
  ADD_PRODUCT,
  SHOW_PRODUCTS
} from 'constants/actions';

const products = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: action.payload };
    case SHOW_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default products;
