import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import Order from "../Pages/Order";
import ThankYou from "./ThankYou";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/order" component={Order} />
      <Route
        exact
        path="/product_details/:productId"
        component={ProductDetails}
      />
      <Route exact path="/thankYou" component={ThankYou} />
      <Route path="/" component={Home} />
    </Switch>
  );
}
