import cartConstants from "../Constants/cartConstants";

const initialState = {
  cartProducts: [],
  total_quantity: 0,
  total_price: 0
};

const saveToLocalStoarge = (cartProducts) => {
  window.localStorage.setItem("product_cart", JSON.stringify(cartProducts));
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.INITIAL_UPDATE:
      console.log("Initial Payload", action.payload);
      return action.payload;

    case cartConstants.ADD_TO_CART:
      const res = state.cartProducts.filter(
        (item) => item.id === action.payload.id
      );
      console.log(res);

      if (res.length === 0) {
        const obj = {
          cartProducts: [
            ...state.cartProducts,
            { id: action.payload.id, quantity: action.payload.quantity }
          ],
          total_quantity: state.total_quantity + action.payload.quantity,
          total_price:
            state.total_price + action.payload.quantity * action.payload.price
        };
        saveToLocalStoarge(obj);
        return obj;
      } else {
        const obj = {
          cartProducts: state.cartProducts.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + action.payload.quantity
                }
              : item
          ),
          total_quantity: state.total_quantity + action.payload.quantity,
          total_price:
            state.total_price + action.payload.quantity * action.payload.price
        };
        saveToLocalStoarge(obj);
        return obj;
      }
    case cartConstants.REMOVE_FROM_CART: {
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (p) => p.id != action.payload.id
        ),
        total_price: state.total_price - action.payload.price,
        total_quantity: state.total_quantity - action.payload.quantity
      };
    }
    case "CLEAR_CART": {
      return {
        ...state,
        cartProducts: [],
        total_quantity: 0,
        total_price: 0
      };
    }
    default:
      return {
        ...state
      };
  }
};

export default cartReducer;
