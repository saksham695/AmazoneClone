import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, img, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("BASKET", basket);
  const filledStar = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      filledStar.push(true);
      continue;
    }
    filledStar.push(false);
  }
  const addToBasket = () => {
    //dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        img,
        price,
        rating,
      },
    });
  };
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
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
