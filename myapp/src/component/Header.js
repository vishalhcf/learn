import { useState } from 'react';
import './Header.css'
import Login from './Login'
import { Link } from 'react-router-dom';

export default function Header() {
    // let loginvar=true;
    const[toggleLogin,setLogin]=useState(false)
  return (
    <div>
        <nav  className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <link className="navbar-brand" href="#">Navbar</link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <link className="nav-link active" aria-current="page" to="#">Home</link>
        </li>
        <li className="nav-item">
          <link className="nav-link" to="#">Link</link>
        </li>
        <li className="nav-item dropdown">
          <link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </link>
          <ul className="dropdown-menu">
            <li><link className="dropdown-item" href="#">Action</link></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      
        <button className="btn btn-outline-success" onClick={()=>setLogin(!toggleLogin)}>Login</button>
      </form>
    </div>
  </div>
</nav>
  <Login/>
    </div>
  )
}
