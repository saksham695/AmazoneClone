import { ShoppingBasket } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt="Amazon Logo"
      />

      <div className="header-search">
        <input className="header-search-input" type="text"></input>
        <SearchIcon className="material-icons-search-icon" />
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-option-line-one">Hello Guest</span>
          <span className="header-option-line-two">Sign In</span>
        </div>
        <div className="header-option">
          {" "}
          <span className="header-option-line-one">Returns</span>
          <span className="header-option-line-two">& Orders</span>
        </div>
        <div className="header-option">
          {" "}
          <span className="header-option-line-one">Your</span>
          <span className="header-option-line-two">Prime</span>
        </div>
        <div className="header-option-basket">
          <ShoppingBasketIcon className="header-basket-icon" />
          <span className="header-option-line-two-header-basket">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
