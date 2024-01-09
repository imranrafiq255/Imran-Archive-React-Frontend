import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home/Home.js";
import AddFile from "./Components/AddFile/AddFile.js";
import Contact from "./Components/Contact/Contact.js";
import About from "./Components/About/About.js";
import Login from "./Components/Login/Login.js";
import PageNotFound from "./Components/PageNotFound/PageNotFound.js";
import axios from "axios";

const App = () => {
  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await axios.get(
          "https://imran-archive-backend1.vercel.app/api/v1/admin/loadadmin"
        );
        console.log(response);
        if (response) {
          setAuthentication(true);
        }
      } catch (error) {
        console.log(error.response.data.message);
        setAuthentication(false);
      }
    };

    loadUser();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/addfile"
            element={isAuthenticated ? <AddFile /> : <Navigate to="/login" />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
