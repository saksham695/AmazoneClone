import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const getTotalAmount = () => {
    let totalPrice = 0;
    basket.map(({ price }) => {
      totalPrice = totalPrice + parseInt(price);
    });
    return totalPrice;
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          console.log("Subtotal Value", value);
          return (
            <>
              <p>
                {/* { part for homework} */}
                Subtotal ({basket.length} items):
                <strong>{getTotalAmount()}</strong>
              </p>
              <small className="subtotal-gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={0}
        fixedDecimalScale
        value={getTotalAmount()} // Part for the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
