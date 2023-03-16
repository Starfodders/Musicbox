import React from "react";
import Header from "../Header/Header";
import axios from "axios";
import bgimage from "../../assets/images/backgroundBars.svg";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__background">
        <img
          src={bgimage}
          alt="background-bars"
          className="home__background--image"
        />
      </div>
    </div>
  );
};

export default HomePage;
