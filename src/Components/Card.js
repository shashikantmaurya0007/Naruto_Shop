import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ image, title, price, rating, id }) => {
  const rate = rating?.rate;

  return (
    <>
      <Link className="link-decoration" to={`/product_details/${id}`}>
        <article className="product-container">
          <div className="product-image">
            <img src={image} alt="product_image" />
          </div>
          <div className="product-description">
            <h3>{title}</h3>
            <div className="product-footer">
              <h4>Price : {price}$</h4>
              <h4>Rating : {rate}</h4>
            </div>
            {/* <button onClick={() => dispatch(AddToCart(id))}>Add</button> */}
          </div>
        </article>
      </Link>
    </>
  );
};

export default Card;
