import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { auth } from "./firebase";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="header-search">
        <input className="header-search-input" type="text"></input>
        <SearchIcon className="material-icons-search-icon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option" onClick={handleAuthentication}>
            <span className="header-option-line-one">
              Hello {user && `${user.email.substring(0, 5)}...`}
            </span>
            <span className="header-option-line-two">
              {user ? "Sign Out" : "Sign-in"}
            </span>
          </div>
        </Link>

        <Link to={"/order"}>
          <div className="header-option">
            {" "}
            <span className="header-option-line-one">Returns</span>
            <span className="header-option-line-two">& Orders</span>
          </div>
        </Link>

        <div className="header-option">
          {" "}
          <span className="header-option-line-one">Your</span>
          <span className="header-option-line-two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-option-basket">
            <ShoppingBasketIcon className="header-basket-icon" />
            <span className="header-option-line-two-header-basket">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
