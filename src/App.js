import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import AddFile from "./Components/AddFile/AddFile.js";
import Contact from "./Components/Contact/Contact.js";
import About from "./Components/About/About.js";
import Login from "./Components/Login/Login.js";
import PageNotFound from "./Components/PageNotFound/PageNotFound.js";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addfile" element={<AddFile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
