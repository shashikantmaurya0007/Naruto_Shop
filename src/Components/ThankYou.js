import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ClearCart } from "../redux/Actions/cartProductAction";
const ThankYou = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ClearCart());
  }, []);

  return <h1>Thank you for shopping with us</h1>;
};

export default ThankYou;
