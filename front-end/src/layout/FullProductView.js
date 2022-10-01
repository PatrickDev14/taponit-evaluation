import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readProduct } from "../utils/api";
import ErrorAlert from "./shared/ErrorAlert";
import "./shared/layout.css";

function FullProductView() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProduct(productId);
  }, [productId]);

  function loadProduct(productId) {
    setError(null);
    const abortController = new AbortController();
    readProduct(productId, abortController.signal)
      .then(setProduct)
      .catch(setError);
    return () => abortController.abort();
  }

  // function updateScoreHandler(
  //   { movie_id: movieId, review_id: reviewId },
  //   score
  // ) {
  //   console.log("score", reviewId, score);
  //   updateReview(reviewId, { score }).then(() => loadMovie(movieId));
  // }

  return (
    <div className="container">
      <ErrorAlert error={error} />
      <section className="row mt-4">
        <article className="col-sm-12 col-md-6 col-lg-7">
          <img
            alt={`${product.title}`}
            src={product.image_url}
            style={{ width: "100%" }}
          />
        </article>
        <aside className="col-sm-12 col-md-6 col-lg-5">
          <h4 className="font-oxygen-heading mb-4">{product.title}</h4>
          <h5 className="font-oxygen text-left mb-4">Price: {product.price}</h5>
          <h5 className="font-oxygen font-weight-bold text-left mb-3">Description</h5>
          <p className="font-oxygen text-left">{product.description}</p>
          {/* <Likes
            likes={product.likes}
            setLikes={updateScoreHandler}
          /> */}
        </aside>
      </section>
    </div>
  );
}

export default FullProductView;