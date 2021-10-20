import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cartProducts.total_quantity);
  return (
    <nav className="nav-bar">
      <Link className="nav-heading" to="/">
        Naruto Shop
      </Link>
      <div className="nav-list">
        <Link to="/home">HOME</Link>
        <Link to="/order">Cart {cartCount}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
