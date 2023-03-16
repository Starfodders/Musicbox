import React from "react";
import Header from "../Header/Header";
import axios from "axios";
import Keys from "../Keys/Keys"

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home">
        <div className = "home__player">
            {<Keys/>}
        </div>
    </div>
  );
};

export default HomePage;
