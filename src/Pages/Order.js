import OrderCard from "../Components/OrderCard";
import { useSelector, useDispatch } from "react-redux";
import { InitialUpdate } from "../redux/Actions/cartProductAction";
import GetProducts from "../redux/Actions/productsAction";

import { useEffect } from "react";

import "./Order.css";
import { Link } from "react-router-dom";

export default function Order() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProducts());
    const cartProductsLS = JSON.parse(
      window.localStorage.getItem("product_cart")
    );
    // if (cartProductsLS !== null && cartProductsLS.length > 0)
    dispatch(InitialUpdate(cartProductsLS));
  }, []);

  const allProducts = useSelector((state) => state.products.products);
  const productsInCart = useSelector(
    (state) => state.cartProducts.cartProducts
  );
  const totalItems = useSelector((state) => state.cartProducts.total_quantity);
  const totalPrice = useSelector((state) => state.cartProducts.total_price);

  const filteredProducts = allProducts
    ?.filter((product) => {
      return productsInCart?.some((cartItem) => {
        return product.id === cartItem.id;
      });
    })
    .map((item) => {
      const index = productsInCart.findIndex((x) => x.id === item.id);
      return {
        ...item,
        quantity: productsInCart[index].quantity
      };
    });

  console.log(productsInCart);

  return (
    <section className="order_page">
      <h2> Order - Summary </h2>
      <div className="order-summary">
        <h4>Total Items - {totalItems}</h4>
        {filteredProducts.map((item) => (
          <OrderCard key={item.id} {...item} />
        ))}
      </div>
      <div className="order-payment">
        {totalPrice === 0 ? null : (
          <div>
            <h4>Total Price - {totalPrice.toFixed(2)}</h4>
            <button>
              <Link to="/thankYou">Pay</Link>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
