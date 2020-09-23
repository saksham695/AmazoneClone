import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import LoginScreen from "./LoginScreen";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
export default function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      console.log("The user is >>>>", authUser);
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
