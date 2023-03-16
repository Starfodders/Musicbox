import React from "react";
import logo from "../../assets/images/musicbox-logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import {useState} from "react"

const Header = () => {
  const [atSaved, setAtSaved] = useState(true)

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__block">Ignore</div>
        <Link to="/" className="header__block">
          <img src={logo} alt="logo" className="header__logo"></img>
        </Link>
        <Link to="/saved" className = "header__block">
          <h2 className= {atSaved ? 'header__link--active' : 'header__link'}>Saved</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
