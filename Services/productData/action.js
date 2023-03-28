import {
  PRODUCT_DATA_FAILURE,
  PRODUCT_DATA_REQUEST,
  PRODUCT_DATA_SUCCESS,
} from './constants';
import config from '../../config/env';

const apiConfig = config.apiURL;
const productsApiURL =
  apiConfig + config.apiConfig.productsApi.fetchAllProducts;
export const productDataRequest = () => {
  return {
    type: PRODUCT_DATA_REQUEST,
  };
};

export const productDataSuccess = products => {
  return {
    type: PRODUCT_DATA_SUCCESS,
    payload: products,
  };
};

export const productDataFailure = error => {
  return {
    type: PRODUCT_DATA_FAILURE,
    payload: error,
  };
};

export const fetchProductsData = id => {
  return dispatch => {
    dispatch(productDataRequest());
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(productsApiURL + '/' + id, requestOptions)
      .then(response => response.text())
      .then(result => {
        const productData = JSON.parse(result);
        dispatch(productDataSuccess(productData));
      })
      .catch(error => dispatch(productDataFailure(error)));
  };
};