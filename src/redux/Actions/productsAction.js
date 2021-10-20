import productsConstants from "../Constants/productsConstants";

const fetchProduct = () => {
  return {
    type: productsConstants.FETCH_PRODUCT
  };
};

const fetchProductSuccess = (products) => {
  return {
    type: productsConstants.FETCH_PRODUCT_SUCCESS,
    payload: products
  };
};

const fetchProductFail = () => {
  return {
    type: productsConstants.FETCH_PRODUCT_FAIL
  };
};

const GetProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProduct);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch(fetchProductSuccess(data));
    } catch (err) {
      dispatch(fetchProductFail);
    }
  };
};

export default GetProducts;
