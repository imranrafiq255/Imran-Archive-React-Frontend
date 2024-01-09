import React, { useState } from "react";
import "./Login.css";
import LoginIllustrator from "../../Images/loginillustrator.svg";
import Logo from "../../Images/logo.svg";
import Google from "../../Images/Group.svg";
import Twitter from "../../Images/twitter (1).png";
import Linkedin from "../../Images/linkedin.png";
import EmailIcon from "../../Images/email.svg";
import PasswordIcon from "../../Images/lock.svg";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [adminEmail, setEmail] = useState("");
  const [adminPassword, setPassword] = useState("");
  const [errorMessage, setMessage] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleForm = async () => {
    if (!adminEmail) {
      setMessage("Email is missing");
      return;
    }
    if (!adminPassword) {
      setMessage("Password is missing");
      return;
    }
    try {
      setLoading(true);
      const data = { adminEmail, adminPassword };
      const response = await axios.post(
        "https://imran-archive-backend1.vercel.app/api/v1/admin/login",
        data
      );
      if (response) {
        setLoading(false);
        navigate("/addfile");
      }
    } catch (error) {
      setLoading(false);
      setMessage(
        error.response?.data?.message || "An error occurred during login."
      );
    }
  };

  return (
    <>
      <div className="main-login-container">
        <div className="col-md-7 left">
          <div className="image-container">
            <img src={LoginIllustrator} alt="" className="login-illustrator" />
            <h3>Welcome back,</h3>
            <p>
              let's start it by login to your account and start saving your
              files
            </p>
          </div>
        </div>
        <div className="col-md-5 right">
          <div className="form">
            <div className="logo">
              <img src={Logo} alt="" />
              <h3 className="imran-name">Imran Archive</h3>
            </div>
            <div className="welcome-text">
              <h2 className="welcome">Hi, Welcome Back!</h2>
              <p className="my-para">
                Login with your social media or your credentials
              </p>
            </div>
            <div className="accounts">
              <div className="google card">
                <img src={Google} alt="" />
                <h4>Sign in with Google</h4>
              </div>
              <div className="linkedin card">
                <img src={Linkedin} alt="" />
              </div>
              <div className="twitter card">
                <img src={Twitter} alt="" />
              </div>
            </div>
            <div className="line">
              <div className="left-line"></div>
              <div className="line-text">or Sign in with Email</div>
              <div className="right-line"></div>
            </div>
            <div className="email-message">
              <h6 className="text-center text-danger">{errorMessage}</h6>
            </div>
            <div className="email">
              <h3 className="email-text">Email address</h3>
              <input
                type="email"
                className="email-input"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <img src={EmailIcon} alt="" className="email-icon" />
            </div>
            <div className="password">
              <h3 className="password-text">Password</h3>
              <input
                type="password"
                className="password-input"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <img src={PasswordIcon} alt="" className="password-icon" />
            </div>
            <div className="remember">
              <input type="checkbox" />
              <h3>Remember me</h3>
            </div>
            <button className="signin-btn" onClick={handleForm}>
              {loading ? (
                <ScaleLoader
                  color={"#fff"}
                  loading={loading}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
