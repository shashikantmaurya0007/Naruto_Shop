import { useDispatch } from "react-redux";
import "./OrderCard.css";
import { RemoveFromCart } from "../redux/Actions/cartProductAction";

const OrderCard = ({ id, image, title, price, quantity }) => {
  const dispatch = useDispatch();
  return (
    <article className="order-card">
      <img src={image} alt="product_image" />

      <div className="order-card-body">
        <h5>{title}</h5>
        <p>
          <span>Price : </span>
          {price}$
        </p>
      </div>

      <div className="order-quantity">
        <button
          onClick={() => {
            dispatch(RemoveFromCart(id, quantity, price));
          }}
        >
          Remove
        </button>

        {/* <button></button> */}
      </div>
    </article>
  );
};

export default OrderCard;
