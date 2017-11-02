import {
  ADD_PRODUCT,
  FETCHING_PRODUCTS,
  SHOW_PRODUCTS,
  GET_PRODUCT_DETAIL,
  UPDATE_PRODUCT,
  REMOVE_PRODUCT,
  SHOW_MODAL_DELETE,
  CLOSE_MODAL_DELETE,
  SEARCH_PRODUCT
} from 'constants/actionTypes';

const initialState = {
  isFetchingProducts: false,
  productList: [],
  isOpen: false,
  index: null,
  id: null,
  name: null
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
    case REMOVE_PRODUCT:
      return Object.assign({}, state, {
        productList: state.productList.filter((e, i) => i !==action.id)
      });
    case SHOW_MODAL_DELETE:
      return Object.assign({}, state, {
        isOpen: true,
        index: action.index,
        id: action.id,
        name: action.name,
      });
    case CLOSE_MODAL_DELETE:
      return Object.assign({}, state, {
        isOpen: false
      });
    case SEARCH_PRODUCT:
      return Object.assign({}, state, {
        productList: action.payload
      });
    default:
      return state;
  }
};

export default product;
