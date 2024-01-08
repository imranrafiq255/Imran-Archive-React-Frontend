import React from "react";
import "./PageNotFound.css";
import { NavLink } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
      <div className="main-container">
        <div className="four_zero_four_bg">
          <h1 className="text-center ">404</h1>
        </div>
        <div className="contant_box_404">
          <h3 className="h2 text-center">Look like you're lost</h3>
          <p className="para">the page you are looking for not avaible!</p>
          <div className="btn-home">
            <NavLink to={"/"} className="link_404">
              Go to Home
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
