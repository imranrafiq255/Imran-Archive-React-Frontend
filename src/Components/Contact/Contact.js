import React from "react";
import "./Contact.css";
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
import Facebook from "../../Images/facebook.svg";
import Instagram from "../../Images/Insta 1.svg";
import Twitter from "../../Images/twitter.svg";
import Tiktok from "../../Images/Tiktok.svg";
import Whatsapp from "../../Images/whatsapp.svg";
import Github from "../../Images/github.svg";
import { NavLink } from "react-router-dom";
import ContactIllustrator from "../../Images/contact us illustrator.svg";
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
            <div className="home-item contact-home">
              <img src={HomeIcon} alt="There is home icon" />
              <NavLink to={"/"}>
                <h3>Home</h3>
              </NavLink>
            </div>
            <div className="file-item">
              <img src={FileIcon} alt="There is home icon" />
              <NavLink to={"/addfile"}>
                <h3>Add File</h3>
              </NavLink>
            </div>
            <div className="about-item">
              <img src={AboutIcon} alt="There is home icon" />
              <NavLink to={"/about"}>
                <h3>About</h3>
              </NavLink>
            </div>
            <div className="contact-item contact-contact">
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
          <div className="contact-container">
            <div className="container contact-inner-container">
              <div className="contact-illustrator">
                <img src={ContactIllustrator} alt="" />
              </div>
              <div className="contact-text">
                <h3>Contact us</h3>
                <h6>You can contact now on Whatsapp</h6>
                <h5>Call us: +92324 7572574</h5>
              </div>
              <div className="social-contacts">
                <a href="https://www.facebook.com/mohammedimranrafique">
                  <img src={Facebook} alt="" />
                </a>
                <a href="https://www.instagram.com/imran.writes___">
                  <img src={Instagram} alt="" />
                </a>
                <a href="https://www.twitter.com/iamimranmalik__">
                  <img src={Twitter} alt="" />
                </a>
                <a href="https://www.tiktok.com/@imran_malik255?_t=8irlclJi122&_r=1">
                  <img src={Tiktok} alt="" />
                </a>
                <a href="whatsapp://send?phone=03036751255">
                  <img src={Whatsapp} alt="" />
                </a>
                <a href="https://www.github.com/imranrafiq255">
                  <img src={Github} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
