import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        E-Electronics
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/Home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle variant={isDarkMode ? "dark" : "light"} id="dropdown-basic">
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: isDarkMode ? '#333' : '#fff' }}>
                  <Dropdown.Item as={Link} to="/Smartphone" className={isDarkMode ? 'text-white' : 'text-dark'}>
                    Smartphone
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Television" className={isDarkMode ? 'text-white' : 'text-dark'}>
                    Television
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Speakers" className={isDarkMode ? 'text-white' : 'text-dark'}>
                    Speakers
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Microwave" className={isDarkMode ? 'text-white' : 'text-dark'}>
                    Microwave
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Computers" className={isDarkMode ? 'text-white' : 'text-dark'}>
                    Computers
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <button onClick={toggleTheme} className="btn btn-link">
                {isDarkMode ? <FaSun color="yellow" /> : <FaMoon color="blue" />}
              </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AddToCart">
                My Cart
              </Link>
            </li>
          </ul>
          
          <form className="d-flex">
            <input
              className={`form-control me-2 ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
