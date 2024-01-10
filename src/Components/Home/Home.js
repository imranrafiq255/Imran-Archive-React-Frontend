import React, { useState, useEffect } from "react";
import "./Home.css";
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
import Download from "../../Images/download.png";
import File from "../../Images/File.png";
import LeftArrow from "../../Images/left-arrow.png";
import RightArrow from "../../Images/right-arrow.png";
import Menu from "../../Images/menus.png";
import Cross from "../../Images/cross.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastFile = currentPage * 6;
  const indexOfFirstFile = indexOfLastFile - 6;
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://imran-archive-backend1.vercel.app/api/v1/file/loadfiles"
        );

        if (response && response.data && response.data.files) {
          const sortedFiles = response.data.files.sort((a, b) => {
            const dateA = new Date(a.createdAt || a.updatedAt);
            const dateB = new Date(b.createdAt || b.updatedAt);
            return dateB - dateA;
          });

          const filteredFiles = sortedFiles.filter((file) =>
            file.fileName.toLowerCase().includes(searchQuery.toLowerCase())
          );

          setFiles(filteredFiles);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching files:", error);
        setLoading(false);
      }
    };

    fetchFiles();
  }, [searchQuery]);
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (indexOfLastFile < files.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const currentFiles = files.slice(indexOfFirstFile, indexOfLastFile);
  useEffect(() => {
    const id = setTimeout(() => {
      setSplashScreen(false);
    }, 1000);
    return () => clearTimeout(id);
  });
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
                <input
                  type="text"
                  placeholder="Search here..."
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
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
                  <h3>My Files</h3>
                  <h4>{files.length + " Files"}</h4>
                </div>
                {loading ? (
                  <div className="loading">
                    <ScaleLoader
                      color={"#000"}
                      loading={loading}
                      size={150}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </div>
                ) : (
                  <div className="row folders">
                    {currentFiles.length === 0 ? (
                      <h1>No Result in database</h1>
                    ) : (
                      currentFiles.map((item) => (
                        <div className="col-md-4">
                          <div className="file-item-1 card">
                            <img src={File} alt="" />
                            <div className="file-details">
                              <h2>{item.fileName}</h2>
                              <a
                                href={item.fileURL}
                                download={encodeURIComponent(item.fileName)}
                              >
                                <img
                                  src={Download}
                                  alt=""
                                  width={35}
                                  height={35}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
                {files.length <= 6 ? (
                  ""
                ) : (
                  <div className="pagination">
                    {currentPage === 1 ? (
                      ""
                    ) : (
                      <div className="item">
                        <button
                          style={{ background: "transparent", border: "none" }}
                          onClick={prevPage}
                          disabled={currentPage === 1}
                        >
                          <img src={LeftArrow} alt="" />
                        </button>
                      </div>
                    )}
                    {indexOfLastFile >= files.length ? (
                      ""
                    ) : (
                      <div className="item card">
                        <button
                          style={{ background: "transparent", border: "none" }}
                          onClick={nextPage}
                          disabled={indexOfLastFile >= files.length}
                        >
                          <img src={RightArrow} alt="" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
