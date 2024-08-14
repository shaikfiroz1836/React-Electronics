import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ isDarkMode, toggleTheme }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = './Home';
  };

  return (
    <div className='container-fluid' style={{ 
      backgroundImage: `url("/Photos/Electronics2.png")`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      height: '100vh', 
      width: '100vw',
      position: 'fixed', 
      top: 0,
      left: 0 
    }}>
      <nav
        className="navbar navbar-transparent bg-transparent navbar-expand-lg"
        style={{ backgroundColor: 'transparent' }}
      >
        <Link
          to="#"
          className="navbar-brand bg-transparent"
          style={{ color: isDarkMode ? 'white' : 'black' }}
        >
          Urbanmart
        </Link>
      </nav>

      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card transparent-card">
              <div className="card-body">
                <h5 className="card-header">Login</h5>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Email Id:</label>
                      <input type="text" className="form-control" name="email" />
                    </div>
                    <div className="form-group">
                      <label>Password:</label>
                      <input type="password" className="form-control" name="password" />
                    </div>
                    <input type="submit" value="Login" className="btn btn-success" id="loginBtn" />
                    <input type="button" value="Sign Up" className="btn btn-success ml-2" onClick={() => {window.location.href = './Register.html'}} /> <br />
                    <a className="nav-link" onClick={() => {window.location.href = './ForgotPass.html'}}>Forgot Password?</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
