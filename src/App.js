import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Smartphone from "./Components/Smartphone";
import Iphone15 from "./Components/Iphone15";
import Samsungs from "./Components/Samsungs";
import Television from "./Components/Television";
import Login from "./Components/Login";

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
          <Route path="/Iphone" Component={Iphone15} />
          <Route path="/samsungs" Component={Samsungs} />
          <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
