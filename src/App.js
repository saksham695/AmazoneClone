import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import LoginScreen from "./LoginScreen";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Order from "./Orders";

const promise = loadStripe(
  "pk_test_51HVbNZCv5CV4EYa67Ip9qr2r4Gl0zszZReF3BaTHkt1LQIYJYlbl15HpOHEG1xEsa2Gg1Nr2qE3Jbi4lyzgkNus900Vss1mEz7"
);

export default function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      console.log("The user is >>>>", JSON.stringify(authUser));
      if (authUser) {
        // the user just logged in
        await dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user just logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    //will run only once when the app component loads
  }, []);

  return (
    <div>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/order">
              <Header />
              <Order />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/" exact>
              <Header />
              <Home />
            </Route>
            <Route path="/login">
              <LoginScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
