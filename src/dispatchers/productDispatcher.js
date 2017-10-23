import axios from 'axios';
import API_URL_BASE from 'APIClient/HTTPClient';
import { showNotificationFromToaster } from 'helpers/Toaster';
import { firstToUpperCase } from 'helpers/FormatString';
import {
  TOAST_SUCCESSFUL as successful,
  TOAST_FAILED as failed
} from 'constants/toasters';
import {
  fetchingProducts,
  fetchProductsSuccess,
  addProductSuccess,
  updateProductSuccess
} from 'actions/productActions';

export const fetchProducts = () => {
  return axios.get(`${API_URL_BASE}/products`);
};

export const showProducts = () => {
  return dispatch => {
    dispatch(fetchingProducts());
    return fetchProducts()
    .then(response => dispatch(fetchProductsSuccess(response.data)))
    .catch(errors => console.log(errors));
  };
};

export const addProduct = data => {
  return dispatch => {
    const { productName, productPrice, productDescription } = data;
    const nameUpercaseFirstLetter = firstToUpperCase(productName);
    const descriptionUpercaseFirstLetter = firstToUpperCase(productDescription);
    const priceParsedInt = parseInt(productPrice, 10);

    axios({
      method: 'POST',
      url: `${API_URL_BASE}/products`,
      data: {
        name: nameUpercaseFirstLetter,
        price: priceParsedInt,
        description: descriptionUpercaseFirstLetter,
      },
    })
    .then(response => {
      dispatch(addProductSuccess(response.data));
      showNotificationFromToaster(`${productName} added successful`, successful);
    })
    .catch(errors => {
      console.log(errors);
      showNotificationFromToaster('Add failed', failed);
    });
  };
};

export const updateProduct = (data, id) => {
  const { productName, productPrice, productDescription } = data;
  const nameUpercaseFirstLetter = firstToUpperCase(productName);
  const descriptionUpercaseFirstLetter = firstToUpperCase(productDescription);
  const priceParsedInt = parseInt(productPrice, 10);

  return dispatch => {
    axios({
      method: 'PUT',
      url: `${API_URL_BASE}/products/${id}`,
      data: {
        name: nameUpercaseFirstLetter,
        price: priceParsedInt,
        description: descriptionUpercaseFirstLetter,
      }
    })
    .then(response => {
      dispatch(updateProductSuccess(response.data));
      showNotificationFromToaster('Update success', successful);
    })
    .catch(errors => {
      console.log(errors);
      showNotificationFromToaster('Update failure', failed);
    });
  };
};
