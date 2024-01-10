import React, { useEffect, useState } from "react";
import "./AddFile.css";
import Logo from "../../Images/logo.svg";
import HomeIcon from "../../Images/homeicon.svg";
import AboutIcon from "../../Images/abouticon.svg";
import FileIcon from "../../Images/fileicon.svg";
import ContactIcon from "../../Images/contacticon.svg";
import Arrow from "../../Images/small-right.svg";
import Imran from "../../Images/imranmalik2.jpg";
import Notification from "../../Images/notification.svg";
import Language from "../../Images/Language.png";
import Sun from "../../Images/Sun.png";
import SearchIcon from "../../Images/search-icon.svg";
import Menu from "../../Images/menus.png";
import Cross from "../../Images/cross.png";
import Upload from "../../Images/uploadicon.svg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
const Home = () => {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleForm = async () => {
    if (file == null) {
      setErrorMessage("file is required");
      return;
    }
    if (!fileName) {
      setErrorMessage("File name is required");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        "https://imran-archive-backend1.vercel.app",
        { fileName, file },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (response) {
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error);
      setLoading(false);
    }
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
  const fileOpener = () => {
    const inputFile = document.getElementById("input-file");
    inputFile.click();
    inputFile.style.display = "block";
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
            <div className="home-item file-home">
              <img src={HomeIcon} alt="There is home icon" />
              <NavLink to={"/"}>
                <h3>Home</h3>
              </NavLink>
            </div>
            <div className="file-item file-file">
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
          <div className="addfile-container">
            <div className="container addfile-inner-container">
              <div className="file-upload-text">
                <h3>Upload File</h3>
              </div>
              <div className="upload-file-container">
                <div className="upload-file">
                  <img src={Upload} alt="" />
                  <h3>Drop files to upload</h3>
                  <p>OR</p>
                  <input
                    type="file"
                    placeholder="Select files"
                    id="input-file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <button id="open-file-btn" onClick={fileOpener}>
                    Select file
                  </button>
                </div>
                <div className="error-message">
                  <p className="text-center text-danger">{errorMessage}</p>
                </div>
                <input
                  type="text"
                  className="file-name"
                  placeholder="Enter file name"
                  required
                  onChange={(e) => setFileName(e.target.value)}
                />
                <button className="upload-btn" onClick={handleForm}>
                  {loading ? (
                    <ScaleLoader
                      color={"#fff"}
                      loading={loading}
                      size={50}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  ) : (
                    "Upload File"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
