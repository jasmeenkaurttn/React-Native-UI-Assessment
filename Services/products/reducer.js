import {isEmpty} from '../../config/functions';

const {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  PRODUCTS_CATEGORY,
  FILTER_PRODUCTS_BY_CATEGORY,
  CLEAR_ALL_FILTER,
  SORT_PRODUCTS_ASC,
  SORT_PRODUCTS_DESC,
} = require('./constants');

const initialState = {
  loading: false,
  items: [],
  error: null,
  category: [],
  filteredItems: [],
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: null,
      };
    case PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        items: [],
        error: action.payload,
      };

    case SORT_PRODUCTS_ASC:
      if (isEmpty(state.filteredItems)) {
        return {
          ...state,
          filteredItems: state.items.sort((a, b) => a.price - b.price),
        };
      } else {
        return {
          ...state,
          filteredItems: state.filteredItems.sort((a, b) => a.price - b.price),
        };
      }

    case SORT_PRODUCTS_DESC:
      if (isEmpty(state.filteredItems)) {
        return {
          ...state,
          filteredItems: state.items.sort((a, b) => b.price - a.price),
        };
      } else {
        return {
          ...state,
          filteredItems: state.filteredItems.sort((a, b) => b.price - a.price),
        };
      }
    case PRODUCTS_CATEGORY:
      const categoryArr = [...new Set(action.payload)];
      return {
        ...state,
        loading: false,
        error: null,
        category: categoryArr,
      };
    case FILTER_PRODUCTS_BY_CATEGORY:
      const brandData = state.items.filter(e => e.category === action.payload);
      return {
        ...state,
        loading: false,
        error: null,
        filteredItems: brandData,
      };
    case CLEAR_ALL_FILTER:
      return {
        ...state,
        loading: false,
        error: null,
        filteredItems: [],
      };
    default:
      return state;
  }
};