import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" href="#">Electronics</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="#">Link</Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </Link>
        <div class="dropdown-menu">
          <Link class="dropdown-item" href="#">Action</Link>
          <Link class="dropdown-item" href="#">Another action</Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" href="#">Something else here</Link>
        </div>
      </li>
      <li class="nav-item">
        <Link class="nav-link disabled">Disabled</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar
