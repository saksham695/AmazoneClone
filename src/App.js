import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
export default function App() {
  return (
    <div>
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
