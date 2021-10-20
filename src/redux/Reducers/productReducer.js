import productsConstants from "../Constants/productsConstants";

const initialState = {
  loading: false,
  products: [],
  error: false
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productsConstants.FETCH_PRODUCT:
      return {
        ...state,
        error: false,
        loading: true
      };

    case productsConstants.FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: false
      };

    case productsConstants.FETCH_PRODUCT_FAIL: {
      return {
        products: [],
        error: true,
        loading: false
      };
    }

    default:
      return state;
  }
};

export default productReducer;

export const selectProduct = (state, productId) =>
  state.products.products.find((product) => product.id == productId);
