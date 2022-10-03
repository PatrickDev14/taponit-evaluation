import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { readProduct, updateProductLikes } from "../utils/api";
import ErrorAlert from "./shared/ErrorAlert";
import "./shared/layout.css";

function FullProductView() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});  
  const [hasAlreadyLiked, setHasAlreadyLiked] = useState(false);
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

  function likeClickHandler() {
    console.log(productId);
    const increasedData = { likes: product.likes + 1 };
    console.log("likes total", productId, increasedData.likes);

    setHasAlreadyLiked(true);
    updateProductLikes(increasedData, productId)
      .then(() => loadProduct(productId));
  }

  function dislikeClickHandler() {
    console.log(productId)
    const decreasedData = { likes: product.likes - 1 };
    console.log("likes total", productId, decreasedData.likes);

    setHasAlreadyLiked(false);
    updateProductLikes(decreasedData, productId)
      .then(() => loadProduct(productId));
  }

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
          <h5 className="font-oxygen-heading text-left mb-3">Description</h5>
          <p className="font-oxygen text-left">{product.description}</p>
          <section className="mb-4">
            <div className="mb-4 font-oxygen">
              <strong>Likes:</strong> {product.likes}
            </div>
            <div>
              <button
                className="font-oxygen"
                onClick={() => likeClickHandler()}
                disabled={hasAlreadyLiked}
              >
                <i className="fas fa-thumbs-up fa-lg"></i> Like
              </button>
              <button
                className="font-oxygen ml-4 mb-6"
                onClick={() => dislikeClickHandler()}
                disabled={!hasAlreadyLiked}
              >
                <i className="fas fa-thumbs-down fa-lg"></i> Dislike
              </button>
            </div>
            <div>
              <Link to="/">
                <button
                  className="font-oxygen mt-5"
                >
                  <i className="fas fa-arrow-left fa-lg"></i> All Tees
                </button>
              </Link>
            </div>
          </section>
        </aside>
      </section>
    </div>
  );
}

export default FullProductView;