import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Smartphone from "./Components/Smartphones/Smartphone";
import Iphone from "./Components/Smartphones/Iphone";
import Samsungs from "./Components/Smartphones/Samsungs";
import Oneplus from "./Components/Smartphones/Oneplus";
import Moto from "./Components/Smartphones/Moto";
import Oppo from "./Components/Smartphones/Oppo";
import Realme from "./Components/Smartphones/Realme";
import Television from "./Components/Television/Television";
import Login from "./Components/Login";
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Router>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/Home" /> : <Login onLogin={handleLogin} />} />
          <Route path="/Home" Component={Home} />
          <Route path="/About" Component={About} />
          <Route path="/Smartphone" Component={Smartphone} />
          <Route path="/Television" Component={Television} />
          <Route path="/Iphone" Component={Iphone} />
          <Route path="/samsungs" Component={Samsungs} />
          <Route path="/Oneplus" Component={Oneplus} />
          <Route path="/Moto" Component={Moto} />
          <Route path="/Oppo" Component={Oppo} />
          <Route path="/Realme" Component={Realme} />
          <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
