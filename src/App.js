import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import AddToCart from "./Components/AddToCart";
import Smartphone from "./Components/Smartphones/Smartphone";
import Iphone from "./Components/Smartphones/Iphone";
import Samsungs from "./Components/Smartphones/Samsungs";
import Oneplus from "./Components/Smartphones/Oneplus";
import Moto from "./Components/Smartphones/Moto";
import Oppo from "./Components/Smartphones/Oppo";
import Realme from "./Components/Smartphones/Realme";
import Television from "./Components/Television/Television";
import Microwave from "./Components/Microwave/Microwave";
import Speakers from './Components/Speakers/Speakers'
import Computers from './Components/Computers/Computers'
import Login from "./Components/Login";
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Router>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/Home" /> : <Login onLogin={handleLogin} />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Smartphone" element={<Smartphone addToCart={addToCart} isDarkMode={isDarkMode} />} />
          <Route path="/Television" element={<Television addToCart={addToCart} isDarkMode={isDarkMode} />} />
          <Route path="/Speakers" element={<Speakers addToCart={addToCart} isDarkMode={isDarkMode} />} />
          <Route path="/Microwave" element={<Microwave addToCart={addToCart} isDarkMode={isDarkMode} />} />
          <Route path="/Computers" element={<Computers addToCart={addToCart} isDarkMode={isDarkMode} />} />
          <Route path="/Iphone" element={<Iphone addToCart={addToCart} isDarkMode={isDarkMode} />} />
          <Route path="/samsungs" element={<Samsungs addToCart={addToCart} isDarkMode={isDarkMode}/>} />
          <Route path="/Oneplus" element={<Oneplus addToCart={addToCart} isDarkMode={isDarkMode}/>} />
          <Route path="/Moto" element={<Moto addToCart={addToCart} isDarkMode={isDarkMode}/>} />
          <Route path="/Oppo" element={<Oppo addToCart={addToCart} isDarkMode={isDarkMode}/>} />
          <Route path="/Realme" element={<Realme addToCart={addToCart} isDarkMode={isDarkMode} />} />
          <Route path="/AddToCart" element={<AddToCart cartItems={cartItems} />} />
          <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
