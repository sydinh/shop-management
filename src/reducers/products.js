import { SHOW_PRODUCTS } from 'constants/actions';

const products = (state = {}, action) => {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default products;
