import React from "react";
import "./Product.css";

function Product({ title, img, price, rating }) {
  const filledStar = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      filledStar.push(true);
      continue;
    }
    filledStar.push(false);
  }
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          <p>
            {filledStar.map((itr) => {
              if (itr) {
                return <span className="product-rating-start">⭐</span>;
              }
            })}
          </p>
        </div>
      </div>
      <img src={img} alt="Product " />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
