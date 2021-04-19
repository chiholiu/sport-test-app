import { types } from "../actions";

const initialState = {
  products: [],
  searchText: "",
  productId: []
};

export const productData = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA: {
      return {
        ...state,
        products: action.product
      };
    }

    case types.FILTER_PRODUCT: {
      return {
        ...state,
        searchText: action.text
      };
    }

    case types.GET_ID: {
      return {
        ...state,
        productId: action.id
      };
    }

    default:
      return state;
  }
};

export default productData;
