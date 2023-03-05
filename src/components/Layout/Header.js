import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {GiShoppingBag} from "react-icons/gi"

const Header = () => {
  return (
    <>
       
       <nav className="navbar navbar-expand-lg bg-body-territary ">
  <Link to="/" className="navbar-brand"> <GiShoppingBag/> Ecommerce App</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item ">
        <NavLink to="/" className="nav-link" aria-current="page" href="#">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Register"  className="nav-link" href="#">Signup</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Login"  className="nav-link" href="#">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Cart"  className="nav-link" href="#">Cart (0)</NavLink>
      </li>
      
          
   </ul>
  </div>
</nav>


    </>
  )
}

export default Header