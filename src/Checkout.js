import React from "react";
import "./Checkout.css";
import CartItem from "./CartItem";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          alt="ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h2 className="checkout-title">{user?.email} Shopping Basket</h2>
          {basket?.map(({ id, price, img, title, rating }) => {
            return (
              <CartItem
                id={id}
                price={price}
                img={img}
                title={title}
                rating={rating}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
