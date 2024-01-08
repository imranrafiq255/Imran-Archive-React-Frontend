import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
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
import ThreeDot from "../../Images/threedots.svg";
import File from "../../Images/File.png";
import LeftArrow from "../../Images/left-arrow.png";
import RightArrow from "../../Images/right-arrow.png";
import Menu from "../../Images/menus.png";
import Cross from "../../Images/cross.png";
import { NavLink } from "react-router-dom";
const SplashScreen = () => {
  return (
    <div
      className="splash-screen"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        marginTop: "100px",
      }}
    >
      <img src={Logo} alt="" width={100} height={100} />
      <p style={{ marginTop: "260px" }}>version 1.0.1</p>
    </div>
  );
};
const Home = () => {
  const [splashScreen, setSplashScreen] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => {
      setSplashScreen(false);
    }, 2000);
    return () => clearTimeout(id);
  });
  const enterMouse = () => {
    const download = document.getElementById("download");
    download.style.visibility = "visible";
  };
  const leaveMouse = () => {
    const download = document.getElementById("download");
    download.style.visibility = "hidden";
  };
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
      {splashScreen ? (
        <SplashScreen />
      ) : (
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
              <div className="home-item home-home">
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
              <div className="contact-item">
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
            <div className="folder-container">
              <div className="container inner-container">
                <div className="files-name">
                  <h3>My files</h3>
                  <h4>40 files</h4>
                </div>
                <div className="row folders">
                  <div className="col-md-4">
                    <div className="file-item-1 card" onMouseLeave={leaveMouse}>
                      <img src={File} alt="" />
                      <div className="file-details">
                        <h2>Filename.docs</h2>
                        <img src={ThreeDot} alt="" onMouseEnter={enterMouse} />
                        <button className="download-btn" id="download">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="file-item-1 card">
                      <img src={File} alt="" />
                      <div className="file-details">
                        <h2>Filename.docs</h2>
                        <img src={ThreeDot} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="file-item-1 card">
                      <img src={File} alt="" />
                      <div className="file-details">
                        <h2>Filename.docs</h2>
                        <img src={ThreeDot} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row folders">
                  <div className="col-md-4">
                    <div className="file-item-1 card">
                      <img src={File} alt="" />
                      <div className="file-details">
                        <h2>Filename.docs</h2>
                        <img src={ThreeDot} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="file-item-1 card">
                      <img src={File} alt="" />
                      <div className="file-details">
                        <h2>Filename.docs</h2>
                        <img src={ThreeDot} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="file-item-1 card">
                      <img src={File} alt="" />
                      <div className="file-details">
                        <h2>Filename.docs</h2>
                        <img src={ThreeDot} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination">
                  <div className="item">
                    <img src={LeftArrow} alt="" />
                  </div>
                  <div className="item card">
                    <img src={RightArrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
