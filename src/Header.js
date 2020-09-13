import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />

      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__nav_option">
          <span className="header__nav_option_line1">Hello Guest</span>
          <span className="header__nav_option_line2">Sign In</span>
        </div>
        <div className="header__nav_option">
          <span className="header__nav_option_line1">Returns</span>
          <span className="header__nav_option_line2">Orders</span>
        </div>
        <div className="header__nav_option">
          <span className="header__nav_option_line1">Your</span>
          <span className="header__nav_option_line2">Prime</span>
        </div>
        <div className="header__nav_cart">
          <ShoppingCartIcon />
          <span className="header__nav_cart_count">5</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
