import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <div className="header-title">
            <a className="logo" href="/browse">
              Mood Music
            </a>
          </div>
          <div className="header-menu">
            <a className="search" href="/search" role="button">
              검색
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
