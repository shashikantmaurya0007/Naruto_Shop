import cartConstants from "../Constants/cartConstants";

export const AddToCart = (id, quantity, price) => {
  return {
    type: cartConstants.ADD_TO_CART,
    payload: { id, quantity, price }
  };
};

export const RemoveFromCart = (id, quantity, price) => {
  return {
    type: cartConstants.REMOVE_FROM_CART,
    payload: { id, price: quantity * price, quantity }
  };
};

export const InitialUpdate = (cartProducts) => {
  return {
    type: cartConstants.INITIAL_UPDATE,
    payload: cartProducts
  };
};

export const ClearCart = () => {
  return {
    type: "CLEAR_CART"
  };
};
