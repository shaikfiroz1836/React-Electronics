import React from 'react';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any necessary login logic here

    // Redirect to the home page
    window.location.href = './home.html';
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <a href="#" className="navbar-brand">Electronics</a>
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
                    <input type="button" value="Sign Up" className="btn btn-success" onClick={() => {window.location.href = './Register.html'}} /> <br />
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
