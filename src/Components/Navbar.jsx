import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: isDarkMode ? '#333' : '#f8f9fa' }}>
      <Link className={`navbar-brand ${isDarkMode ? 'text-white' : 'text-dark'}`} to="/">
        Urbanmart
      </Link>
      
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className={`nav-link ${isDarkMode ? 'text-white' : 'text-dark'}`} to="/Home">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li>
            <Link className={`nav-link ${isDarkMode ? 'text-white' : 'text-dark'}`} to="/About">
              About
            </Link>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle variant={isDarkMode ? "dark" : "light"} id="dropdown-basic">
                Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link  className={`nav-link ${isDarkMode ? 'text-white' : 'text-dark'} dropdown-item`} to="/Smartphone">
                    Smartphone
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className={`nav-link ${isDarkMode ? 'text-white' : 'text-dark'} dropdown-item`} to="/Television">
                    Television
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className={`nav-link ${isDarkMode ? 'text-white' : 'text-dark'} dropdown-item`} to="/Microwave">
                    Microwave
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="nav-item">
            <button onClick={toggleTheme} className="btn btn-link">
              {isDarkMode ? <FaSun color="yellow" /> : <FaMoon color="blue" />}
            </button>
          </li>
          <li>
            <Link className={`nav-link ${isDarkMode ? 'text-white' : 'text-dark'}`} to="/AddToCart">
              My Cart
            </Link>
          </li>
        </ul>
        
        <form className="form-inline my-2 my-lg-0">
          <button
            className={`btn ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'} my-2 my-sm-0 ml-1`}
            type="submit"
          >
            Search
          </button>

        </form>
      </div>
    </nav>
  );
};

export default Navbar;
