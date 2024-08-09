import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
const Navbar = () => {
 
  return (
    <div>
      {/* <nav className="navbar bg-dark navbar-expand-lg"> */}
        {/* <Link className="navbar-brand text-white" to="/">
          Electronics
        </Link> */}
        {/* <Link className="navbar-brand text-white" to="/">
          <img height={150} width={150} src="/Photos/LOGO/Urbanmart3-NOBG.png" alt="Urbanmart3-NOBG Image"/>
        </Link> */}
        
        <nav className="navbar bg-dark navbar-expand-lg" style={{ padding: '10px 15px' }}>
        <Link className="navbar-brand text-white" to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ height: 50, width: 50 }}>
            <img
              src="/Photos/LOGO/Urbanmart3-NOBG.png"
              alt="Urbanmart3-NOBG Image"
              style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            />
          </div>
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
              <Link className="nav-link text-white" to="/Home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link text-white" to="/About">
                About
              </Link>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link className="dropdown-item" to="/Smartphone">
                      Smartphone
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className="dropdown-item" to="/Television">
                      Television
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className="dropdown-item" to="/Microwave">
                      Microwave
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>

            {/* <Link className="nav-link text-white" to="/Login">
                Login <span className="sr-only">(current)</span>
              </Link> */}
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
