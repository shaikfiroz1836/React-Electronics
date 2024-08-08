import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter as Router,Routes, Route,Navigate} from "react-router-dom";
import Smartphone from "./Components/Smartphone";
import Iphone15 from "./Components/Iphone15";
import Samsungs from "./Components/Samsungs";
import Television from "./Components/Television";
import Login from "./Components/Login";
import React, { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/Home" /> : <Login onLogin={handleLogin} />} />
        <Route path="/Home" Component={Home} />
        <Route path="/About" element={isLoggedIn ? <About /> : <Navigate to="/" />} />
        <Route path="/Smartphone" element={isLoggedIn ? <Smartphone /> : <Navigate to="/" />} />
        <Route path="/Television" element={isLoggedIn ? <Television /> : <Navigate to="/" />} />
        <Route path="/Iphone" element={isLoggedIn ? <Iphone15 /> : <Navigate to="/" />} />
        <Route path="/samsungs" element={isLoggedIn ? <Samsungs /> : <Navigate to="/" />} />
        <Route path="/Login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

  export default App;
