import React, { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import "./Payment.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { useHistory } from "react-router-dom";
import { db } from "./firebase";

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [precessing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  const history = useHistory();

  useEffect(() => {
    // generate the secret stripe secret which allows us to charge a customer
    console.log("used effect", getBasketTotal(basket) * 100);
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      console.log("--------RESPONSE-----", response);
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    //  do all the strip stuff
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //payment intent = payment confirmation
        console.log("PAYMENT INTENT", paymentIntent);
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: 500,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        return paymentIntent;
      });

    history.replace("/order");
    console.log("PAYLOAD >>>>", payload);
    dispatch({
      type: "EMPTY_BASKET",
    });
  };
  console.log("The Secret IS >>>", clientSecret);

  const handleChange = (e) => {
    //  Listen to changes in card element
    // and display any errors as the customer types their card number
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment-checkout">Checkout ({basket?.length} item)</div>
      <div className="address-container">
        <h5 className="payment-title"> Delivery Address</h5>
        <div className="delivery-address-text-container">
          <p className="delivery-address">{user?.email}</p>
          <p className="delivery-address">B-1205,Prateek Laurel</p>
          <p className="delivery-address"> Sector-120, Noida</p>
        </div>
      </div>
      <div>
        {basket?.map(({ id, price, img, title, rating }) => {
          return (
            <div className="item-container">
              <h5 className="payment-title">Review Items and Delivery</h5>
              <ReviewItem
                id={id}
                price={price}
                img={img}
                title={title}
                rating={rating}
              />
            </div>
          );
        })}
      </div>
      <div className="payment-method">
        <h5 className="payment-title">Payment Methods</h5>
        <div className="card-detail-container">
          <h6 className="payment-card-details">Card Details</h6>
          {/* <div className="card-detail-from"> */}
          <div className="payment-checkout-container">
            <CurrencyFormat
              renderText={(value) => {
                return (
                  <>
                    <form onSubmit={handleSubmit}>
                      <CardElement onChange={handleChange} />

                      <p
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "row",
                        }}
                      >
                        Order Total<strong>{value}</strong>
                      </p>
                    </form>
                  </>
                );
              }}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <button
              disabled={precessing || disabled || succeeded}
              onClick={handleSubmit}
            >
              {precessing ? <p>Processing</p> : "Buy Now"}
            </button>

            <div
              style={{
                display: "flex",
                padding: "2px",
                color: "red",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {error ? error : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
