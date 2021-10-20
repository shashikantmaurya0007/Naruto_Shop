import "./ProductDetailCard.css";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { AddToCart } from "../redux/Actions/cartProductAction";

export const ProductDetailCard = ({
  image,
  title,
  price,
  rating,
  id,
  description
}) => {
  const rate = rating?.rate;
  const count = rating?.count;
  const [quant, setQuant] = useState(1);

  const dispatch = useDispatch();

  return (
    <div className="productdetail-container">
      <div className="left-img">
        <img src={image} alt="product_image" />
      </div>
      <div className="detail-style">
        <h3>{title}</h3>

        <p className="product_desc">{description}</p>
        <p>
          <span>Price : </span>
          {price * quant}$
        </p>
        <p>
          <span> Rating : </span>
          {rate} rated by {count}
        </p>

        <div className="qunatity">
          Quantity:
          <button
            className="details-btn"
            onClick={() => {
              setQuant(quant + 1);
            }}
          >
            +
          </button>
          {quant}
          <button
            className="details-btn"
            onClick={() => {
              if (quant > 1) {
                setQuant(quant - 1);
              }
            }}
          >
            -
          </button>
        </div>
        <button
          className="details-btn"
          onClick={() => dispatch(AddToCart(id, quant, price))}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
