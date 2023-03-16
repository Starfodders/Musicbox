import React from 'react';
import logo from "../../assets/images/musicbox-logo.png"
import "./Header.scss";

const Header = () => {
    return (
        <div className = "header">
            <div className = "header__container">
                <img src = {logo} alt = "logo" className = "header__logo"></img>
            </div>
        </div>
    );
};

export default Header;