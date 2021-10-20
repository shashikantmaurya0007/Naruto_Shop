import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetProducts from "../redux/Actions/productsAction";
import Card from "../Components/Card";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);

  // console.log(error);
  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${1}`).then((res) => {
  //     console.log((res) => res.json());
  //   });
  //   // console.log("single product");
  // }, [id]);

  if (error) {
    return (
      <div>
        <p> Error :( </p>
        {/* {console.log(error)} */}
      </div>
    );
  } else {
    return (
      <section className="">
        <h1> Products </h1>
        {loading === true ? (
          <h1>Loading...</h1>
        ) : (
          <div className="products-grid">
            {products?.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        )}
      </section>
    );
  }
}
