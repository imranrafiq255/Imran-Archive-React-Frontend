import React from "react";
import "./About.css";
import Logo from "../../Images/logo.svg";
import HomeIcon from "../../Images/homeicon.svg";
import AboutIcon from "../../Images/abouticon.svg";
import FileIcon from "../../Images/fileicon.svg";
import ContactIcon from "../../Images/contacticon.svg";
import Arrow from "../../Images/small-right.svg";
import Imran from "../../Images/imranmalik2.jpg";
import Notification from "../../Images/notification.svg";
import Language from "../../Images/language.svg";
import Sun from "../../Images/Sun.svg";
import SearchIcon from "../../Images/search-icon.svg";
import Menu from "../../Images/menus.png";
import Cross from "../../Images/cross.png";
import { NavLink } from "react-router-dom";
import AboutIllustrator from "../../Images/about us illustrator.svg";
const Home = () => {
  const hideSidebar = () => {
    const leftNav = document.getElementById("left-nav");
    const cross = document.getElementById("crossIcon");
    cross.style.visibility = "hidden";
    leftNav.style.visibility = "hidden";
    const rightNav = document.getElementById("right-nav");
    rightNav.style.visibility = "visible";
    rightNav.style.display = "flex";
  };
  const showSidebar = () => {
    const leftNav = document.getElementById("left-nav");
    const rightNav = document.getElementById("right-nav");
    leftNav.style.visibility = "visible";
    const cross = document.getElementById("crossIcon");
    cross.style.visibility = "visible";
    rightNav.style.visibility = "hidden";
    rightNav.style.display = "none";
  };
  return (
    <>
      <div className="main-home-container">
        <div className="left-navbar card" id="left-nav">
          <div className="cross">
            <img src={Cross} id="crossIcon" alt="" onClick={hideSidebar} />
          </div>
          <div className="logo">
            <img src={Logo} alt="This is a logo" />
          </div>
          <div className="menu-text">
            <h4> MAIN MENU </h4>
          </div>
          <div className="nav-items">
            <div className="home-item about-home">
              <img src={HomeIcon} alt="There is home icon" />
              <NavLink to={"/"}>
                <h3>Home</h3>
              </NavLink>
            </div>
            <div className="file-item about-file">
              <img src={FileIcon} alt="There is home icon" />
              <NavLink to={"/addfile"}>
                <h3>Add File</h3>
              </NavLink>
            </div>
            <div className="about-item about-about">
              <img src={AboutIcon} alt="There is home icon" />
              <NavLink to={"/about"}>
                <h3>About</h3>
              </NavLink>
            </div>
            <div className="contact-item about-contact">
              <img src={ContactIcon} alt="There is home icon" />
              <NavLink to={"/contact"}>
                <h3>Contact</h3>
              </NavLink>
            </div>
            <div className="bottom-line">
              <div className="line"></div>
            </div>
            <div className="account">
              <div className="user-dp">
                <img src={Imran} alt="" />
              </div>
              <div className="name">
                <h3>Imran Malik</h3>
                <h6>My account</h6>
              </div>
              <div className="arrow-up-down">
                <img src={Arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="right-navbar" id="right-nav">
          <div className="top-navbar">
            <div className="web-name">
              <img src={Menu} alt="" onClick={showSidebar} />
              <h1>Imran Archive</h1>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search here..." />
              <img src={SearchIcon} alt="" />
            </div>
            <div className="top-nav-items">
              <div className="sun">
                <img src={Sun} alt="" />
              </div>
              <div className="language">
                <img src={Language} alt="" />
              </div>
              <div className="notification">
                <img src={Notification} alt="" />
              </div>
              <div className="account-dp">
                <img src={Imran} alt="" />
              </div>
            </div>
          </div>
          <div className="top-navbar-bottom-line">
            <div className="line"></div>
          </div>
          <div className="about-container">
            <div className="container about-inner-container">
              <div className="about-us-text">
                <h3>About Us</h3>
              </div>
              <div className="about-us-illustrator">
                <img src={AboutIllustrator} alt="" />
              </div>
              <div className="user-information row">
                <div className="col-md-6 user-avatar">
                  <img src={Imran} alt="" />
                </div>
                <div className="col-md-6 user-info">
                  <h1>
                    <span>H</span>ey, my name is Imran Maik. I am from
                    Bahawalpur. I have graduated from UMT.
                  </h1>{" "}
                  <br />
                  <h2>
                    I am a <span>Software Engineer</span> who works in web
                    development.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
