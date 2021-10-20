import { useParams } from "react-router";

import { useEffect } from "react";
import { useState } from "react";
import { ProductDetailCard } from "../Components/ProductDetailsCard";

// import { ShowProductDetails } from "../redux/Actions/productDetailsAction";
// import { RemoveProductDetails } from "../redux/Actions/productDetailsAction";

import { selectProduct } from "../redux/Reducers/productReducer";
import { useSelector } from "react-redux";

export default function ProductDetails() {
  const { productId } = useParams();
  // console.log(productId);
  // const [productDetails, setProductDetails] = useState({});

  const product = useSelector((state) => selectProduct(state, productId));

  // console.log("product", product);

  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${productId}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       setProductDetails(json);
  //     });
  // }, []);

  console.log(productId);
  return <ProductDetailCard {...product} />;
}
