const {
  PRODUCT_DATA_REQUEST,
  PRODUCT_DATA_SUCCESS,
  PRODUCT_DATA_FAILURE,
} = require('./constants');

const initialState = {
  loading: false,
  data: {},
  error: null,
};

export const productData = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case PRODUCT_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};