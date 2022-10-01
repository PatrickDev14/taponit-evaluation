import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorAlert from "./shared/ErrorAlert";
import { listProducts } from "../utils/api";
import "./shared/layout.css";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const abortController = new AbortController();
    listProducts(abortController.signal)
      .then(setProducts)
      .catch(setError);

    return () => abortController.abort();
  }, []);

  const list = products.map((product) => (
    <article key={product.product_id} className="col-sm-12 col-md-6 col-lg-4 my-4">
      <img
        alt={`${product.title}`}
        src={product.image_url}
        style={{ width: "100%" }}
      />
      <Link
        to={`/${product.product_id}`}
        className="stretched-link text-dark"
      >
        <h5 className="font-oxygen text-left mt-2">Price: {product.price}</h5>
        <h5 className="font-oxygen text-left mt-2">{product.title}</h5>
      </Link>
    </article>
  ));

  return (
    <main className="container">
      <ErrorAlert error={error} />
      <h3 className="font-oxygen">Top Sellers</h3>
      <hr />
      <section className="row">{list}</section>
    </main>
  );
}

export default ProductsList;