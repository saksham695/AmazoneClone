import React from "react";
import "./CartItem.css";
import { useStateValue } from "./StateProvider";

function CartItem({ id, title, img, price, rating }) {
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
      type: "REMOVE_FROM_BASKET",
      item: {
        id,
      },
    });
  };
  return (
    <div className="item">
      <img src={img} alt="item " className="item-image" />
      <div className="item-info">
        <p>
          <strong>{title} </strong>
        </p>
        <p className="item-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="item-rating">
          <p>
            {filledStar.map((itr) => {
              if (itr) {
                return <span className="item-rating-start">⭐</span>;
              }
            })}
          </p>

          <button onClick={addToBasket}>Remove From Basket</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
