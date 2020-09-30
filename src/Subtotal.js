import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  const onCheckoutClick = () => {
    history.push("/payment");
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          console.log("Subtotal Value", value);
          return (
            <>
              <p>
                Subtotal ({basket?.length} items):
                <strong>{value}</strong>
              </p>
              <small className="subtotal-gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        fixedDecimalScale
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={onCheckoutClick}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
