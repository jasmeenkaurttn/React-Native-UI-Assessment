import {
  CLEAR_ALL_FILTER,
  FILTER_PRODUCTS_BY_CATEGORY,
  PRODUCTS_CATEGORY,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  SORT_PRODUCTS_ASC,
  SORT_PRODUCTS_DESC,
} from './constants';
import config from '../../config/env';

const apiConfig = config.apiURL;
const productsApiURL =
  apiConfig + config.apiConfig.productsApi.fetchAllProducts;
export const productsRequest = () => {
  return {
    type: PRODUCTS_REQUEST,
  };
};

export const productsSuccess = products => {
  return {
    type: PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const productsFailure = error => {
  return {
    type: PRODUCTS_FAILURE,
    payload: error,
  };
};

export const productsCategory = products => {
  return {
    type: PRODUCTS_CATEGORY,
    payload: products,
  };
};

export const fetchProducts = () => {
  return dispatch => {
    dispatch(productsRequest());
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(productsApiURL, requestOptions)
      .then(response => response.text())
      .then(result => {
        const products = JSON.parse(result);
        dispatch(productsSuccess(products));
        const categories = products.map(e => e.category);
        dispatch(productsCategory(categories));
      })
      .catch(error => dispatch(productsFailure(error)));
  };
};

export const sortProductsByPriceAsc = () => {
  return {
    type: SORT_PRODUCTS_ASC,
  };
};
export const sortProductsByPriceDesc = () => {
  return {
    type: SORT_PRODUCTS_DESC,
  };
};
export const filterProductsByBrand = categoryType => {
  return {
    type: FILTER_PRODUCTS_BY_CATEGORY,
    payload: categoryType,
  };
};
export const clearAllFilter = () => {
  return {
    type: CLEAR_ALL_FILTER,
  };
};